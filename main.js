// variables
let navBar = document.getElementById("nav-bar")
let spanAbout = document.getElementById("span-about")
let spanOffer = document.getElementById("span-offer")
let spanGallery = document.getElementById("span-gallery")
let spanBlog = document.getElementById("span-blog")
let spanContact = document.getElementById("span-contanct")
var rootCss = document.querySelector(':root')
let imglogo = document.getElementById("img-logo")
let innerModal = document.getElementById("inner-modal")
let galleryModal = document.querySelector("#gallery-modal")
let iconZoomGalery = Array.from(document.querySelectorAll("#gallery i"))
let currrentindex = 0
let arrowUp = document.getElementById("arrowup")
let rightSlide = document.getElementById("right-slide")
let gearIcon = document.getElementById("gearicon")
let btnSlide = document.getElementById("btn-slide")
let colorsSlide = document.getElementById("colors-slide")
let randomImg = Array.from(document.querySelectorAll("#gallery img"))
let bgHome = document.querySelector(".background-head")
let settingIcon = document.getElementById("fa-gear")
let form = document.getElementById("form-message")
let btnMessage = document.getElementById("btn-message")
let messageSent = document.getElementById("messagesent")
let spanHere = document.getElementById("pressHere")
let inputName = document.getElementById("inputname")
let inputMail = document.getElementById("inputmail")
let inputMessage = document.getElementById("inputmessage")
let inputSubject = document.getElementById("inputsubject")
let aboutSection = document.getElementById("about")
let spanHome = document.getElementById("span-home")
let offersSection = document.getElementById("offer")
let gallerySection = document.getElementById("gallery")
let contactSection = document.getElementById("contact")
let Slider=document.getElementById("slider")
let learnMoreBtn=document.getElementById("learnmore")
// variables
// loading spiner
$(document).ready(function () {
  $("#loading").fadeOut(3000)
});
// loading spiner
// regex code for vaidation
var validname = /^[a-zA-Z ]{3,20}$/;
var validemail = /^[\w-\.]+@([a-z]+\.)+[a-z]{2,4}$/;
var validmessage = /\w+/;
// regex code for vaidation
// form validation
function nameInPutValidation(value) {
  let nametest = validname.test(value)
  if (nametest == true) {
    btnMessage.removeAttribute("data-bs-toggle")
  } else if (value == "") {
    btnMessage.setAttribute("data-bs-toggle", "modal")
  } else {
    btnMessage.setAttribute("data-bs-toggle", "modal")
  }
}
function emailInPutValidation(value) {
  let emailtest = validemail.test(value)

  if (emailtest == true) {
    btnMessage.removeAttribute("data-bs-toggle")
  } else if (value == "") {
    btnMessage.setAttribute("data-bs-toggle", "modal")
  } else {
    btnMessage.setAttribute("data-bs-toggle", "modal")

  }
}
function messageInPutValidation(value) {
  let messagetest = validmessage.test(value)
  if (messagetest == true) {
    btnMessage.removeAttribute("data-bs-toggle")
  } else if (value = "") {
    btnMessage.setAttribute("data-bs-toggle", "modal")
  } else {
    btnMessage.setAttribute("data-bs-toggle", "modal")
  }
}
function messagesent() {
  let messagetest = validmessage.test(inputMessage.value.toLowerCase())
  let emailtest = validemail.test(inputMail.value.toLowerCase())
  let nametest = validname.test(inputName.value.toLowerCase())
  if (messagetest == true && emailtest == true && nametest == true) {
    form.style.display = "none"
    messageSent.style.display = "block"
    clearinputs()
  }
}
function clearinputs() {
  inputMessage.value = ""
  inputName.value = ""
  inputMail.value = ""
  inputSubject.value = ""
}
spanHere.addEventListener("click", function () {
  form.style.display = "block"
  messageSent.style.display = "none"
  btnMessage.setAttribute("data-bs-toggle", "modal")
})
// form validation
// get randonm background by button in the slider
function randombg() {
  randomnumber = Math.floor(Math.random() * randomImg.length)
  let bghomesrc = randomImg[randomnumber].getAttribute("src")
  bgHome.style.backgroundImage = `url(${bghomesrc})`
}
// get randonm background by button in the slider
// gear icon in the slider 
gearIcon.addEventListener("click", function () {
  if (rightSlide.offsetWidth == "200") {
    rightSlide.style.width = "0px";
    settingIcon.classList.remove("animation-gear");
    btnSlide.style.display = 'none';
    btnSlide.style.opacity = '0';
    colorsSlide.style.display = "none";
    colorsSlide.style.opacity = "0";

  } else if (rightSlide.offsetWidth == "0") {
    rightSlide.style.width = "200px"
    settingIcon.classList.add("animation-gear")
    btnSlide.style.opacity = '1';
    colorsSlide.style.opacity = "1";
    setTimeout(() => {
      btnSlide.style.display = 'block';
      colorsSlide.style.display = "flex";
    }, 250)
  }
})
// gear icon in the slider 
// arrow up that move to the top of page
arrowUp.onclick = function () {
  scroll({
    top: 0,
    behavior: "smooth"
  })
}
// arrow up that move to the top of page
// press on gallery zoom icon to open the gallery modal
for (var i = 0; i < iconZoomGalery.length; i++) {
  iconZoomGalery[i].addEventListener("click", function (e) {
    currrentindex = iconZoomGalery.indexOf(e.target)
    srcimg = (e.target.getAttribute("src"))
    galleryModal.style.display = "block"
    innerModal.style.backgroundImage = `url(${srcimg})`
  })
}
// press on gallery zoom icon to open the modal gallery
// press on gallery modal xmark icon to close the modal gallery
function closemoadl() {
  galleryModal.style.display = "none"
}
// press on gallery modal xmark icon to close the modal gallery
// press on left arrow in gallery modal to get the previous pic
function prevpic() {
  currrentindex--
  if (currrentindex === 14) {
    currrentindex = 17
  } if (currrentindex === 11) {
    currrentindex = 14
  } if (currrentindex === 8) {
    currrentindex = 11
  } if (currrentindex === -1) {
    currrentindex = 8

  }
  let prevsrc = iconZoomGalery[currrentindex].getAttribute("src")
  innerModal.style.backgroundImage = `url(${prevsrc})`
}
// press on left arrow in gallery modal to get the previous pic
// press on right arrow in gallery modal to get the next pic
function nextpic() {
  currrentindex++
  if (currrentindex === 9) {
    currrentindex = 0
  } if (currrentindex === 12) {
    currrentindex = 9
  } if (currrentindex === 15) {
    currrentindex = 12
  } if (currrentindex === 18) {
    currrentindex = 15
  }
  let prevsrc = iconZoomGalery[currrentindex].getAttribute("src")
  innerModal.style.backgroundImage = `url(${prevsrc})`
}
// press on right arrow in gallery modal to get the next pic
// color function in the slider to change slite color
function myFunction_red() {
  rootCss.style.setProperty('--brown', 'red');
}
function myFunction_teal() {
  rootCss.style.setProperty('--brown', 'teal');
}
function myFunction_tomato() {
  rootCss.style.setProperty('--brown', 'tomato');
}
function myFunction_black() {
  rootCss.style.setProperty('--brown', 'black');
}
// color function in the slider to change slite color
//  Change a few things in window onscroll function
window.onscroll = function () {

  if (scrollY >= 300) {
    navBar.style.background = "white"
    navBar.classList.remove("navbar-dark")
    navBar.classList.add("navbar-light")
    document.getElementById("nav-bar").style.transition = "all .4s";
    imglogo.setAttribute("src", "img/chef-hat (1).png")
    arrowUp.style.opacity = "1"
  } else {
    navBar.style.background = "transparent"
    navBar.classList.add("navbar-dark")
    imglogo.setAttribute("src", "img/chef-hat (2).png")
    arrowUp.style.opacity = "0"

  }
  // put the underline on the selected section
  if (scrollY >= aboutSection.offsetTop-200) {
    spanHome.classList.remove("underline-nav-home")
    spanAbout.classList.add("underline-nav")

  } else {
    spanHome.classList.add("underline-nav-home")
    spanAbout.classList.remove("underline-nav")
  }
  if (scrollY >= offersSection.offsetTop-200) {
    spanAbout.classList.remove("underline-nav")
    spanOffer.classList.add("underline-nav")
  } else {
    spanOffer.classList.remove("underline-nav")
  } if (scrollY >= gallerySection.offsetTop-200) {
    spanGallery.classList.add("underline-nav")
    spanOffer.classList.remove("underline-nav")
  } else {
    spanGallery.classList.remove("underline-nav")
  } if (scrollY >= contactSection.offsetTop-200) {
    spanContact.classList.add("underline-nav")
    spanGallery.classList.remove("underline-nav")
  } else {
    spanContact.classList.remove("underline-nav")
  }
  // put the underline on the selected section
}
//  Change a few things in window onscroll function








