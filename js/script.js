
/*start animated jobs*/
const change = document.getElementById('job');

let txt = ()=>{
    setTimeout(function(){
        change.textContent = 'Developper';
    }, 0);
    setTimeout(function(){
        change.textContent = 'UI/UX designer';
    }, 4000);
    setTimeout(function(){
        change.textContent = 'Youtuber';
    }, 8000);
    setTimeout(function(){
        txt();
    }, 12000);
};
txt();
/*end animated jobs*/

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
        icon.src = "images/homepage/moon-homepage.png";
    }else{
        icon.src = "images/homepage/sun-homepage.png";
    }
})
/* end Dark-theme*/

