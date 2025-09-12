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

