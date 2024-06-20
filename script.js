const input=document.querySelector(".input");
const disp=document.querySelector(".values");
const inputval=document.querySelector(".inputarea");
const highval=document.querySelector(".high");
const lowval=document.querySelector(".low");
const butval=document.getElementById("calc");
const var0=document.getElementById("unit");
const var1=document.getElementById("f1");
const var2=document.getElementById("f2");
const var3=document.getElementById("f3");
const var4=document.getElementById("f4");
const var10=document.getElementById("tot_amt");
const varh0=document.getElementById("unit1");
const varh1=document.getElementById("g1");
const varh2=document.getElementById("g2");
const varh3=document.getElementById("g3");
const varh4=document.getElementById("g4");
const varh5=document.getElementById("g5");
const varh6=document.getElementById("g6");
const varh7=document.getElementById("g7");
const varh10=document.getElementById("tot_amt_high");
const amtval=document.getElementById("amtval");
const amt= document.querySelector(".amt");
const content=document.querySelector(".content");

let total;
butval.addEventListener("click",function(){
    let a=inputval.value;
    console.log(a);
    if (a<500){
        let amt1=0;
        let amt2=0;
        let amt3=0;
        let amt4=0;
        if (a<=100){
            amt1=0;
            total=amt1;
        };

        if (a<=200 & a>101){
            amt1=0;
            amt2=(a-100)*2.25;
            total=amt1+amt2;
        };

        if (a<=300 & a>201){
            amt1=0;
            amt2=(a-300)*2.25;
            amt3=(a-200)*4.5;
            total=amt1+amt2+amt3;
            
        };

        if (a<=400 & a>201){
            amt1=0;
            amt2=(100)*2.25;
            amt3=(a-200)*4.5;
            total=amt1+amt2+amt3;
            

        };

        if (a<=500 & a>401){
            amt1=0;
            amt2=(100)*2.25;
            amt3=(200)*4.5;
            amt4=(a-400)*6;
            total=amt1+amt2+amt3+amt4;
        };
    lowval.style.display= 'flex';
    highval.style.display= 'none';
    amt.style.display='flex';
    amtval.innerHTML = `${total}`;
    var0.innerHTML = `${a}`;
    var1.innerHTML = `0`;
    var2.innerHTML = `${amt2}`;
    var3.innerHTML = `${amt3}`;
    var4.innerHTML = `${amt4}`;
    var10.innerHTML = `${total}`;
    amtval.innerHTML = `${total}`;
    content.style.height= '70vh';
    content.style.margin= '10px 0 0 450px' ;
}
    else{
        let amt1=0;
        let amt2=0;
        let amt3=0;
        let amt4=0;
        let amt5=0;
        let amt6=0;
        let amt7=0;
        if (a<=100){
            amt1=0;
            total=amt1;
        };

        if (a<=400 & a>101){
            amt1=0;
            amt2=(a-100)*4.5;
            total=amt1+amt2;
        };

        if (a<=500 & a>401){
            amt1=0;
            amt2=(300)*4.5;
            amt3=(a-400)*6;
            total=amt1+amt2+amt3;
            
        };

        if (a<=600 & a>501){
            amt1=0;
            amt2=(300)*4.5;
            amt3=(100)*6;
            amt4=(a-500)*8;
            total=amt2+amt3+amt4;
            

        };

        if (a<=800 & a>601){
            amt1=0;
            amt2=(300)*4.5;
            amt3=(100)*6;
            amt4=(100)*8;
            amt5=(a-600)*9
            total=amt2+amt3+amt4+amt5;
            

        };
        if (a<=1000 & a>801){
            amt1=0;
            amt2=(300)*4.5;
            amt3=(100)*6;
            amt4=(100)*8;
            amt5=(200)*9
            amt6=(a-800)*10
            total=amt2+amt3+amt4+amt5+amt6;
            

        };

        if (a>1001){
            amt1=0;
            amt2=(300)*4.5;
            amt3=(100)*6;
            amt4=(100)*8;
            amt5=(200)*9
            amt6=(200)*10
            amt7=(a-1000)*11
            total=amt2+amt3+amt4+amt5+amt6+amt7;
            

        };
    lowval.style.display= 'none';
    highval.style.display= 'flex';
    amt.style.display='flex';
    varh0.innerHTML = `${a}`;
    varh1.innerHTML = `0` ;
    varh2.innerHTML=`${amt2}`;
    varh3.innerHTML = `${amt3}` ;
    varh4.innerHTML = `${amt4}` ;
    varh5.innerHTML = `${amt5}`;
    varh6.innerHTML = `${amt6}`;
    varh7.innerHTML = `${amt7}`;
    varh10.innerHTML = `${total}`;
    amtval.innerHTML = `${total}`;
    content.style.height= '90vh';
    content.style.margin= '10px 0 0 450px' ;
    };
}
);

