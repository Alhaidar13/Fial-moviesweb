let menu = document.quarySelector(".menu-icon");
let navbar = document.quarySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onescroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

// Review Swiper
const swiper = new swiper(".review-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Email js
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg == "") {
        emptyerror();
    } else{
        sendmail(name.value, email.value, msg.value);
        success();
    }
  });
}
validate();


function sendmail(name,email,msg){
    emailjs.send("service_ftxhgfk","template_9ftl49r",{
    from_name: email,
    to_name:name,
    message: msg,
   });
}

function emptyerror() {
  Swal({
    title: "Oh No....!",
    text: "Fields cannot be empty!.",
    icon: "error",
  });
}

function success() {
  Swal({
    title: "Email sent successfully!",
    text: "We try to reply in 24 hours.",
    icon: "success",
  });
}
// Header Background change On Scroll
let Header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

