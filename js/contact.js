/*start burger navbar*/
const burgerButton = document.getElementById('navButton');
const navigate =  document.getElementById('navig');

burgerButton.addEventListener('click', function(){
    burgerButton.classList.toggle('active')
    navigate.classList.toggle('active')
});
/*end burger navbar*/

/* start Dark-theme*/
const icon = document.getElementById('iconSun');
icon.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = "images/contact/moon-contact.png";
    }else{
        icon.src = "images/contact/sun-contact.png";
    }
})
/* end Dark-theme*/

/*PHONE FORM*/
/*  const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.10.6/build/js/utils.js"),
  });*/

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
  "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
  "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
  "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
  loadUtils: () => import("/intl-tel-input/js/utils.js?1757425287804") // for formatting/placeholders etc
});

/*END PHONE FORM */
