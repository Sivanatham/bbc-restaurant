window.addEventListener("scroll",() => {
    const head=document.querySelector(".header");
    head.classList.toggle('sticky',window.scrollY >0);
});
// const para1=document.querySelector(".show1");
// const para2=document.querySelector(".show2");
// const btn=document.querySelector(".b17");

// btn.addEventListener("click",() => {
//     para1.classList.toggle("hidden");
//     para2.classList.toggle("hidden");

//     btn.textContent=btn.textContent==="Show More"?"Show less":"Show More";
// });
// function toggleText()
// {
//     let points=document.getElementById("show1");
//     let showMoreText=document.getElementById("show2");
//     let buttonText=document.getElementById("textButton");

//     if(ponits.style.display==="none"){
//         showMoreText.style.display="none";
//         points.style.display="inline";
//         buttonText.innerHTML="showmore";
//     }
//     else{
//         showMoreText.style.display="inline";
//         points.style.display="none";
//         buttonText.innerHTML="Show Less"
//     }
// }