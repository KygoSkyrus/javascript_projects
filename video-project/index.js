const btn=document.querySelector(".btn");
const vcont=document.querySelector(".v-cont");

btn.addEventListener('click',function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        vcont.pause();
    }else{
        btn.classList.remove('slide');
        vcont.play();
    }
});
const pl=document.querySelector('.pl');
window.addEventListener('load',function(){
    pl.classList.add('hpl');
    btn.classList.add('visible');
});

