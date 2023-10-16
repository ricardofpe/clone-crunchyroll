

const $navDropdown2 = $(".custom-dropdown");
const $newsDropdown2 = $(".custom-dropdown2");



const $navDropdown = $(".custom-dropdown");
const $newsDropdown = $(".custom-dropdown2");



const $dropAccount = $(".drop-account");
const $iconAccount = $(".icon-account");



const $menuIcon = $(".menu-icon");
const $customDropdownMobile = $(".custom-dropdown-mobile");
const Header = (".container-navigation")



const GenerosSubMenu = document.querySelector("#sub-menu");
const SubMenu = document.querySelector(".dropdown-menu-mob");
const customDropdownMob = document.querySelector(".custom-dropdown-mobile");



const GenerosSubMenu2 = document.querySelector("#sub-menu2");
const SubMenu2 = document.querySelector(".dropdown-menu-mob2");




const MenuIconClose = document.querySelector(".custom-dropdown-mobile");
const CloseAccount = document.querySelector(".icon-account");
const IconMenuMob = document.querySelector(".menu-icon")
const MenuNavigationClose = document.querySelector(".custom-dropdown");
const MenuNewsClose = document.querySelector(".custom-dropdown2");
const IcoNavigation = document.querySelector("#drop");
const IcoNews = document.querySelector("#drop-2")
const CategoriesMobileGener = document.querySelector(".categories-mobile-gener")



const AccountCloseDesktop = document.querySelector(".drop-account")
const CloseNews = document.querySelector("#drop")
const CloseNavigation = document.querySelector("#drop-2")
const IconAccountDesktop = document.querySelector(".icon-account")
const customDropdownTablet = document.querySelector(".custom-dropdown-tablet");



const menuIcon2 = document.querySelector(".menu-icon");





const GenerosSubMenuT = document.querySelector("#sub-menuT");
const SubMenuT = document.querySelector(".dropdown-menu-tablet");
const customDropdownT = document.querySelector(".custom-dropdown-tablet");



const GenerosSubMenuT2 = document.querySelector("#sub-menuT2");
const SubMenuT2 = document.querySelector(".dropdown-menu-tablet2");
const customDropdownT2 = document.querySelector(".custom-dropdown-tablet");

const CloseAccountTablet = document.querySelector(".drop-account")
const CloseMenuIcon = document.querySelector(".menu-icon");


const IcoDrop = document.querySelector(".ico-drop");
const IcoDrop2 = document.querySelector(".ico-drop2");
const IcoDropTablet = document.querySelector(".ico-drop-tablet");
const IcoDropTablet2 = document.querySelector(".ico-drop-tablet2");





$(document).ready(function() {
 
  function toggleDropdownNav() {


    $newsDropdown2.removeClass("show");

    $navDropdown2.toggleClass("show");
    $(".overlay").toggle();

    if ($navDropdown.hasClass("show")) {
      $("#drop").addClass("active-hover");
      $("#drop-2").removeClass("active-hover");
    } else {
      $("#drop").removeClass("active-hover");
    }
  }

  function toggleDropdownNews() {


    $navDropdown.removeClass("show");

    $newsDropdown.toggleClass("show");
    $(".overlay").toggle();

    if ($newsDropdown.hasClass("show")) {
      $("#drop-2").addClass("active-hover");
      $("#drop").removeClass("active-hover");
    } else {
      $("#drop-2").removeClass("active-hover");
    }
  }


  $("#drop").click(function(e) {
    e.stopPropagation(); 
    toggleDropdownNav();
  });

  $("#drop-2").click(function(e) {
    e.stopPropagation(); 
    toggleDropdownNews();
  });


  $(document).on("click", function(event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".custom-dropdown, .custom-dropdown2").removeClass("show");
      $(".overlay").hide();
      $("#drop, #drop-2").removeClass("active-hover");
    }
  });
});




$(document).ready(function() {

  function toggleDropdownAccount() {


    if ($dropAccount.hasClass("active")) {

      $iconAccount.removeClass("active-hover");
    } else {

      $iconAccount.addClass("active-hover");
    }

    $dropAccount.toggleClass("active");
    $(".overlay").toggle();
  }

  $(".icon-account").click(function(e) {
    e.stopPropagation(); 
    toggleDropdownAccount();
  });

  $(document).on("click", function(event) {
    if (!$(event.target).closest(".drop-account").length) {
      $(".drop-account").removeClass("active");
      $(".overlay").hide();
      $(".icon-account").removeClass("active-hover");
    };


  });
});


$(document).ready(function() {
 

  
  $menuIcon.click(function(e) {
    e.stopPropagation(); 
    $customDropdownMobile.toggleClass("show");
    $menuIcon.toggleClass("active-hover");
  });


  $customDropdownMobile.click(function(e) {
    e.stopPropagation(); 
  });

  $(document).on("click", function(event) {
    if (!$customDropdownMobile.is(event.target) && $customDropdownMobile.has(event.target).length === 0) {
      $customDropdownMobile.removeClass("show");
    
    }
  });

  Header.addEventListener("click" , function(){
    $customDropdownMobile.classList.remove("show")
  
  })
});






GenerosSubMenu.addEventListener("click", function() {
  if (SubMenu.classList.contains("show")) {

    customDropdownMob.classList.remove("submenu-opened");
  } else {

    customDropdownMob.classList.add("submenu-opened");
  }
  
  SubMenu.classList.toggle("show");
  customDropdownMob.classList.toggle("scrollable");
  SubMenu2.classList.remove("show")
});

document.addEventListener("click", function(event) {
  if (!GenerosSubMenu.contains(event.target) && !SubMenu.contains(event.target)) {
    SubMenu.classList.remove("show");
    customDropdownMob.classList.remove("submenu-opened"); 
  }
});






GenerosSubMenu2.addEventListener("click", function() {
  if (SubMenu2.classList.contains("show")) {
    customDropdownMob.classList.remove("submenu-opened");
  } else {
    customDropdownMob.classList.add("submenu-opened");
  }
  
  SubMenu2.classList.toggle("show");
  customDropdownMob.classList.remove("scrollable");
 
});

//



CloseAccount.addEventListener("click" ,function(){
  MenuIconClose.classList.remove("show");
  IconMenuMob.classList.remove("active-hover");
});




CloseNews.addEventListener("click", function(){
  AccountCloseDesktop.classList.remove("active")
  IconAccountDesktop.classList.remove("active-hover")
});


CloseNavigation.addEventListener("click", function(){
  AccountCloseDesktop.classList.remove("active")
  IconAccountDesktop.classList.remove("active-hover")
});


CloseAccount.addEventListener("click", function(){
  MenuNavigationClose.classList.remove("show")
  IcoNavigation.classList.remove("active-hover")
});


CloseAccount.addEventListener("click", function(){
  MenuNewsClose.classList.remove("show")
  IcoNews.classList.remove("active-hover")
});

CloseAccount.addEventListener("click", function(){
  customDropdownTablet.classList.remove("show")
  IconMenuMob.classList.remove("active-hover")
});

IconMenuMob.addEventListener("click" , function(){
  CloseAccount.classList.remove("active-hover")
  AccountCloseDesktop.classList.remove("active")
})






document.addEventListener("DOMContentLoaded", function() {




  

  menuIcon2.addEventListener("click", function() {
if (window.innerWidth > 575 && window.innerWidth <= 1115) {
     
      
      customDropdownTablet.classList.toggle("show");
 
    }
  });


  document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
      
    }
  });

document.addEventListener("click", function(event) {
  if (!menuIcon2.contains(event.target) && !customDropdownTablet.contains(event.target)) {
    customDropdownTablet.classList.remove("show");
    menuIcon2.classList.remove("active-hover");
  }
});
});





GenerosSubMenuT.addEventListener("click", function() {
  if (SubMenuT.classList.contains("show")) {

    customDropdownT.classList.remove("submenu-opened");
  } else {

    customDropdownT.classList.add("submenu-opened");
  }
  
  SubMenuT.classList.toggle("show");
  customDropdownT.classList.toggle("scrollable");
  SubMenuT2.classList.remove("show")


});


document.addEventListener("click", function(event) {
  if (!GenerosSubMenuT.contains(event.target) && !SubMenuT.contains(event.target)) {
    SubMenuT.classList.remove("show");
    customDropdownT.classList.remove("submenu-opened"); 
  }
});




GenerosSubMenuT2.addEventListener("click", function() {
  if (SubMenuT2.classList.contains("show")) {
    customDropdownT2.classList.remove("submenu-opened");
  } else {
    customDropdownT2.classList.add("submenu-opened");
  }
  
  SubMenuT2.classList.toggle("show");
  customDropdownT2.classList.remove("scrollable");
 
});




CloseMenuIcon.addEventListener("click", function()
{
  CloseAccountTablet.classList.remove("active")
});





GenerosSubMenu.addEventListener("click", function() {

  if (IcoDrop.classList.contains("up")) {

    IcoDrop.classList.remove("up");
  } else {
   
    IcoDrop.classList.add("up");
  }
});


GenerosSubMenu2.addEventListener("click", function() {

  if (IcoDrop2.classList.contains("up")) {

    IcoDrop2.classList.remove("up");
  } else {
   
    IcoDrop2.classList.add("up");
  }
});


GenerosSubMenuT.addEventListener("click", function() {

  if (IcoDropTablet.classList.contains("up")) {

    IcoDropTablet.classList.remove("up");
  } else {
   
    IcoDropTablet.classList.add("up");
  }
});


GenerosSubMenuT2.addEventListener("click", function() {

  if (IcoDropTablet2.classList.contains("up")) {

    IcoDropTablet2.classList.remove("up");
  } else {
   
    IcoDropTablet2.classList.add("up");
  }
});


IconMenuMob.addEventListener("click", function(){
  if(MenuIconClose.classList.contains("show")){
    IconMenuMob.classList.add("active-hover");
  } else{
    IconMenuMob.classList.remove("active-hover");
  }
})


IconAccountDesktop.addEventListener("click", function(){
  if(AccountCloseDesktop.classList.contains("active")){
    IconAccountDesktop.classList.add("active-hover");
  } else{
    IconAccountDesktop.classList.remove("active-hover");
  }
})


// MAIN //



const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('#prevSlide');
const nextButton = document.querySelector('#nextSlide');
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll(".indicator-item");
const container = document.querySelector('.container-main-desktop');

const slideImages = [
  'https://static.crunchyroll.com/fms/landscape_large/94/png/a8a778d8-573a-4ae3-a49c-ea06a1fe540e.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/8c566c3c-15e4-4c20-a224-174b0744eaf8.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/47aedb23-bdbb-4b0e-bd29-35c72608feca.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/ee76ff8f-c77b-4868-85e7-afef6da6c804.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/a5bac8ac-8bf6-4a78-9674-4730fac66ab6.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/fd4ae1b8-099c-401b-9e31-05cc09383078.jpg',
];

function updateBackgroundImage() {
  container.style.backgroundImage = `url(${slideImages[currentSlide]})`;
}

let currentSlide = 0;

function goToSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'grid';
    } else {
      slide.style.display = 'none';
    }
  });

  currentSlide = slideIndex;

  updateBackgroundImage();
}

function updateIndicators(currentIndex) {
  currentSlide = currentIndex;
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = 'grid';
      indicators[index].style.backgroundColor = "#F58220";
      indicators[index].style.width = '54px';
    } else {
      slide.style.display = 'none';
      indicators[index].style.backgroundColor = "#A9A9A9";
      indicators[index].style.width = '24px';
    }
  });

  updateBackgroundImage(); // Atualiza o fundo do container principal com o novo slide
}

function setInitialIndicator() {
  updateIndicators(0); // Define o indicador inicial para o primeiro slide
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    updateIndicators(index);
  });
});

prevButton.addEventListener('click', () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  goToSlide(currentSlide);
  updateIndicators(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
  updateIndicators(currentSlide);
});

updateBackgroundImage();
goToSlide(currentSlide);
setInitialIndicator(); // Define o indicador inicial

function autoAdvance() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
  updateIndicators(currentSlide);
}

setInterval(autoAdvance, 10000);
