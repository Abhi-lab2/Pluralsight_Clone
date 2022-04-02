import footer from "../footer/footer.js"

   import navbar from "../navbar/navbar.js"
var ft = document.querySelector("#footerdiv")
ft.innerHTML=footer();

var ft = document.querySelector("#navbar")
ft.innerHTML=navbar();
  
  var h1=document.getElementById('indexdiv1h1')
  setInterval(function(){
    h1.innerHTML=""
    h1.innerHTML="Build better workflow";
// workflows
},2000)
setInterval(function(){
    h1.innerHTML=""
    h1.innerHTML="Build better team";
// workflows
},4000)
setInterval(function(){
    h1.innerHTML=""
    h1.innerHTML="Build better product";
// workflows
},6000)
setInterval(function(){
    h1.innerHTML=""
    h1.innerHTML="Build better skills";
// workflows
},8000)
setInterval(function(){
    h1.innerHTML=""
    h1.innerHTML="Build better proccess";
// workflows
},10000)