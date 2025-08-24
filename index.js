var c=document.getElementById('who');

let randomNumber1=Math.floor((Math.random()*6)+1)
// console.log(randomNumber1);

var randomdiceimg1="dice"+randomNumber1+'.png';
var imgsrc1="./images/"+randomdiceimg1;

var a=document.querySelectorAll('img')[0];
a.setAttribute('src',imgsrc1);


let randomNumber2 =Math.floor((Math.random()*6)+1)
var randomdiceimg2="dice"+randomNumber2+".png";
var imgsrc2='./images/'+randomdiceimg2;
var b=document.querySelectorAll('img')[1];
b.setAttribute('src',imgsrc2);
c.classList.add('whos');




if(randomNumber1>randomNumber2)
{
    console.log('player 1 wins');
    c.innerText='player 1 wins';
}
else if(randomNumber1===randomNumber2){
    console.log('draw');
    c.innerText='draw';
}
else{
    console.log('player 2 wins');
    c.innerText='player 2 wins';
    
}