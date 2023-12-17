var whiteDiv = document.getElementById("top");
const scrollPosition = window.scrollY;
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const threshold = 200;
  if (scrollPosition > threshold) {
    whiteDiv.classList.add("background");
  } else {
    whiteDiv.classList.remove("background");
  }
});
// const contactForm = document.getElementById("contact-form")
// contactForm.addEventListener("submit", function (event) {
//     alert("Message sent successfully.")
// })
const contactForm = document.getElementById("contact-form");

const successMessage = document.getElementById("success-message");

// contactForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     successMessage.style.display = "block";
// });

//

// phần pupop send message
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
$(document).ready(function () {
  $("#submit").on("click", function (e) {
    if (
      contactName.value !== "" &&
      contactEmail.value !== "" &&
      contactMessage.value !== ""
    ) {
      e.preventDefault();
      $("#wrap").animate({ width: "toggle" }, 700);
      $(".submit").toggleClass("opened closed");
    }
  });
  $(".close-call").click(function () {
    $("#wrap").hide({ width: "toggle" }, 700);
  });
});

//  nút back top top
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Change style of navbar on scroll
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(
      " w3-card w3-animate-top w3-white",
      ""
    );
  }
}
