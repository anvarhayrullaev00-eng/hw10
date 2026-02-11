let i=0;
(function f(){
  const h=document.querySelector("h1");
  h.style.color=`rgb(${i*2},0,0)`;
  h.textContent=i<100?i++:i+" LEVEL";
  setTimeout(f,100);
})();
