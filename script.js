const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");

//1st square
s1.addEventListener("mouseenter",function(){
    const randNum = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${randNum}</h1>`;
});
s1.addEventListener("mouseleave",function(){
    s1.innerHTML = "<h1>1</h1>";
});

//2nd square
let clr = "red";
s2.addEventListener("mouseenter",function(){
    if(clr=="red"){
        s2.style.backgroundColor = clr;
        clr = "green";
    }
    else if(clr=="green"){
        s2.style.backgroundColor = clr;
        clr = "blue";
    }
    else{
        s2.style.backgroundColor = clr;
        clr = "red";
    }
});
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor = "white";
});

//3rd square
s3.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor = "white";
});

//4th square
s4.addEventListener("click",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    let d  = Math.floor(Math.random()*256);
    let e = Math.floor(Math.random()*256);
    let f = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let h = Math.floor(Math.random()*256);
    let i = Math.floor(Math.random()*256);

    s1.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    s2.style.backgroundColor = `rgb(${d}, ${e}, ${f})`;
    s3.style.backgroundColor = `rgb(${g}, ${h}, ${i})`;
});