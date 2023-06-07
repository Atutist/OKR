var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = `$${index + 1}. ${paragraph.textContent}`;
});

function changeBackground() {
    var colors = ["rgb(62, 69, 145)", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

setInterval(changeBackground, 3000);


function dialogueWithUser() {
    var name = prompt("Як Вас звати?");

    if (name) {
        alert("Привіт, " + name + "! Ми проводимо опитування, щоб покращити якість нашого обслуговування.");

        var age = parseInt(prompt("Скільки Вам років"));
        if (age) {
            if (age < 18) {
                alert("Ви все ще такі молоді, а вже користуєтесь нашими послугами!");
            } else {
                alert("Приємно мати дорослого клієнта!");
            }
            var score = parseInt(prompt("Оцініть якість обслуговування від 1 до 5!"));
            switch (score) {
                case 1:
                case 2:
                    alert("Нам дуже прикро, що вам не сподобалось наше обслуговування, обов'зково зв'яжіться з нашим менеджером");
                    break;
                case 3:
                    alert("Середній результат, якщо знайдете час залиште більш детальну інформацію у полі feedback");
                    break;
                case 4:
                    alert("Сподіваємося наступного разу ми зможемо отримати 5!");
                    break;
                case 5:
                    alert("Дякуємо, ми також задоволені співпрацею з вами!");
                    break;
                default:
                    alert("Такої оцінки не існує)");
                    break;
            }
        } else {
            alert("Невалідний вік.");
        }
    } else {
        alert("Ви не вказали своє ім'я.");
    }
}


// function displayDeveloperInfo(surname, firstName, position = "Розробник") {
//     var information = "Інформація про розробника:\n\n";
//     information += "Прізвище: " + surname + "\n";
//     information += "Ім'я: " + firstName + "\n";
//     information += "Посада: " + position + "\n";

//     alert(information);
// }
// displayDeveloperInfo("Якін", "Сергій");

// function confirmAge() {
//     var confirmation = confirm("Ви 14+?");

//     if (confirmation) {
//         alert("Ласкаво просимо на сайт");
//     } else {
//         alert("Ми не можемо Вас обслуговувати, проте ви можете попросити батьків скористатися нашими послугами)");
//         window.location.href = "access-denied.html";
//     }
// }

// confirmAge();


window.onload = function () {
    document.getElementById("header").innerHTML = '<div class="header"><div class="header_menu"><a href="index.html"><img src="images/logo.png" class="logo"></a><div class="header_links"><a href="index.html" class="header_links_link">Головна </a><a href="#" class="header_links_link">Увійти </a><a href="regestration.html" class="header_links_link">Реєстрація </a></div> </div></div>';

    let oldFooter = document.getElementById("footer");
    oldFooter.outerHTML = '<div class="footer"><div class="footer_links"><a href="https://t.me/Yaakinn" class="fa-brands fa-telegram"></a><a href="#" class="fa-solid fa-phone"></a><a href="#" class="fa-solid fa-envelope"></a><a href="#" class="fa-brands fa-whatsapp"></a></div></div>';
}

var obj = {
    handleEvent: function (event) {
        alert("Спрацював обробник події handleEvent");
        alert("Спрацював на елементі: " + event.currentTarget.tagName);
    }
};

document.getElementById("submitBtn").addEventListener("click", obj);

var myList = document.getElementById("myList");

function handleListClick(event) {
    var target = event.target;
    if (target.tagName === "LI") {
      var currentColor = target.style.backgroundColor;
      if (currentColor === "coral") {
        target.style.backgroundColor = "";
      } else {
        target.style.backgroundColor = "coral";
      }
    }
  }

myList.addEventListener("click", handleListClick);

var menuActionBehavior = {
    handleEvent: function(event) {
      var target = event.target;
      var action = target.dataset.action;
      if (action) {
        var list = document.getElementById("myList");
        var color;
        switch (action) {
          case "action1":
            color = "#f4511e";
            break;
          case "action2":
            color = "coral";
            break;
          case "action3":
            color = "gray";
            break;
        }
        list.style.backgroundColor = color;
      }
    }
  };


var myMenu = document.getElementById("myMenu");
myMenu.addEventListener("click", menuActionBehavior);


var content = document.getElementById('content');
var footer = document.getElementById('footer');
var header = document.getElementById('header');



content.addEventListener('mouseover', changeStyle);
footer.addEventListener('mouseover', changeStyle);
header.addEventListener('mouseover', changeStyle);


content.addEventListener('mouseout', resetStyle);
footer.addEventListener('mouseout', resetStyle);
header.addEventListener('mouseout', resetStyle);


function changeStyle(event) {
    var target = event.target;
    target.style.border = "1px solid coral";
}

function resetStyle(event) {
    var target = event.target;
    var relatedTarget = event.relatedTarget;

    if (relatedTarget && (relatedTarget === target || target.contains(relatedTarget))) {
      return;
    }

    target.style.border = "none";
}

let imgMainPage = document.getElementById('imgMainPage');

imgMainPage.onmousedown = function(event) {
  event.preventDefault(); 

  let shiftX = event.clientX - imgMainPage.getBoundingClientRect().left;
  let shiftY = event.clientY - imgMainPage.getBoundingClientRect().top;

  imgMainPage.style.position = 'absolute';
  imgMainPage.style.zIndex = 1000;
  document.body.append(imgMainPage);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    imgMainPage.style.left = pageX - shiftX + 'px';
    imgMainPage.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  imgMainPage.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    imgMainPage.onmouseup = null;
  };
};

imgMainPage.ondragstart = function() {
  return false; 
};
