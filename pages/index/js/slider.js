let index =0;
let index2 =0;
let index3 =0;//перемінні які будуть зберігати поточні номера слайдів


//Можна було реалізувати все в одній функції з перевірками, але ДТЕК та час проти цього


//функція перемотки слайдів
function showImage(i){
index+=i
let images= document.getElementsByClassName("image")//дістаємо слайди

let dots = document.getElementsByClassName("dot")//точки

for(i =0;i<images.length;i++)
    images[i].style.display = "none"//робимо слайди прозорими 

for(i =0;i<dots.length;i++)
    dots[i].className = dots[i].className.replace(" active","")//та точки неактивними


if(index >images.length -1)
index=0;//якщо пройшли усі слайди повертаємось на початок

if(index<0)
index=images.length -1;//якщо починаємо гортати назад то повернемося на кінець слайдера

images[index].style.display ="block"//поточний слайд стає видимим

document.querySelector(".header__main").style = `background: url(../pages/index/imgs/${index+1}.jpg) no-repeat center center`//міняємо бекграунд 
dots[index].className +=" active"//поточна точка стає активною
    
}//аналогічно й інші ф-ції, лиш інші імена блоків 


function showImage2(i){
    index2+=i
    let images= document.getElementsByClassName("image2")
    
    let dots = document.getElementsByClassName("dot2")
    
    for(i =0;i<images.length;i++)
        images[i].style.display = "none"
    
    for(i =0;i<dots.length;i++)
        dots[i].className = dots[i].className.replace(" active","")
    
    
    if(index2 >images.length -1)
    index2=0;
    
    if(index2<0)
    index2=images.length -1;
    
    images[index2].style.display ="block"
    
    dots[index2].className +=" active"
        
    }

    function showImage3(i){
        index3+=i
        let images= document.getElementsByClassName("image3")
        
        let dots = document.getElementsByClassName("dot3")
        
        for(i =0;i<images.length;i++)
            images[i].style.display = "none"
        
        for(i =0;i<dots.length;i++)
            dots[i].className = dots[i].className.replace(" active","")
        
        
        if(index3 >images.length -1)
        index3=0;
        
        if(index3<0)
        index3=images.length -1;
        
        images[index3].style.display ="block"
        
        dots[index3].className +=" active"
            
        }