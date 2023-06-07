var form = document.getElementById("registerForm");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();

    var newTable = document.getElementById("dataTable");
    newTable.style.visibility = "visible";


    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(username == ""){
        alert("Нікнейм не може бути пустим!");
        return false;
    }

    if(email == "" || !email.includes("@")){
        alert("Введіть коректний пароль!");
        return false;
    }

    if(password == "" || password.length < 8){
        alert("Довжина пароля повинна бути мінімум 8!");
        return false;
    }

    var table = document.getElementById("dataTable");

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3); 


    var textNodeUsername = document.createTextNode(username);
    var textNodeEmail = document.createTextNode(email);
    var textNodePassword = document.createTextNode(password);
    cell1.appendChild(textNodeUsername);
    cell2.appendChild(textNodeEmail);
    cell3.appendChild(textNodePassword);

    console.log("Username (nodeValue): " + cell1.firstChild.nodeValue); 
    console.log("Email (data): " + cell2.firstChild.data);

    var btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.addEventListener('click', function () {
        row.remove();
    });
    cell4.appendChild(btn); 
    
    event.target.removeEventListener("submit", handleFormSubmit);
};
