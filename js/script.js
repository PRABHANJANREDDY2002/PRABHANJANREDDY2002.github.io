var qwe=""
function mycrew(name){
    document.getElementsByClassName("nonhidinfo")[0].style.display="none";
    document.getElementById("MyImage").style.display="none";
    document.getElementById(name).style.display="block";
    document.getElementById("backcrew").style.display="block";
    qwe=name;
}
function aboutback(){
    document.getElementsByClassName("nonhidinfo")[0].style.display="block";
    document.getElementById("MyImage").style.display="block";
    document.getElementById(qwe).style.display="none";
    document.getElementById("backcrew").style.display="none";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if(slides[slideIndex-1]!=undefined){
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if(captionText!=null){
  captionText.innerHTML = dots[slideIndex-1].alt;}}
}

var user="user";
var pass="pass";



function index(){
    document.getElementById("index").style.display="block";
    document.getElementById("about").style.display="none";
    document.getElementById("gallery").style.display="none";
   
    
    document.getElementById("comment").style.display="none";
}
function about(){

  alertify.alert("Are you sure you want to know more about me",function( ){  },function(){}).setHeader('Reddy since 2002').setting({
    'label':'Yes','message': 'Are you sure you want to know more about me','onok': function(){ yes();}}).set('closable',false); 
  


}
function yes(){
    alertify.alert().close();
      document.getElementById("index").style.display="none";
      document.getElementById("about").style.display="block";
      document.getElementById("gallery").style.display="none";
      
}


function gallery(){
    document.getElementById("index").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("gallery").style.display="block";
    //document.getElementById("comment").style.display="none";
}

function comment(){
    document.getElementById("index").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("registerform").style.display="none";
    document.getElementById("loginform").style.display="none";
    //document.getElementById("comment").style.display="block";
}
function edit(){
    document.getElementById("edit").style.display="block";
    document.getElementById("savebtn").style.display="block";
    var newcontent=document.getElementById("para").innerHTML;
    document.getElementById("edit").innerHTML=newcontent;
    document.getElementById("para").style.display="none";
    document.getElementById("editbtn").style.display="none";
}
function save(){
    document.getElementById("para").style.display="block";
    document.getElementById("editbtn").style.display="block";
    var newcontent=document.getElementById("edit").value;
    document.getElementById("para").innerHTML=newcontent;
    document.getElementById("edit").style.display="none";
    document.getElementById("savebtn").style.display="none"; 
}