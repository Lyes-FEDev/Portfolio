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
        icon.src = "moon.png";
    }else{
        icon.src = "sun.png";
    }
})
/* end Dark-theme*/
