let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move")
};
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
    let sendBtn = document.querySelector("send-btn");

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg == ""){
        emptyerror();
    } else{
        sendmail (name.value, email.value, msg.value);
        success();
    }
  })
}
validate();



function emptyerror() {
    swal({
  title: "Oh No....",
  text: "Fields cannot be empty!",
  icon: "error",
});
}
