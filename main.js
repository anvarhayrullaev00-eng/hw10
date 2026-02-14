let i=0;
(function f(){
  let h=document.querySelector("h1");
  h.style.color = i < 50 ? "red" : "green";
  h.innerText = i < 100 ? i++ : i + " LEVEL";
  setTimeout(f,100);
})();


