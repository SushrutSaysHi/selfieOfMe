var SpeechRecognition = window.webkitSpeechRecognition;
var Recog = new SpeechRecognition();

function start(){
     document.getElementById("textarea").innerHTML = " ";
     Recog.start()
}

Recog.onresult = function(event){
     console.log(event);
     var content = event.results[0][0].transcript;
     document.getElementById("textarea").innerHTML = content;
     if(content == "take my selfie"){
          speak();
          console.log("selfie successful");
     }else{
          console.error("did not work");
     }
}

function speak(){
     var spoke = window.speechSynthesis; 
     var speak_text = "taking you a selfie in 10 seconds";
     var speak_data = new SpeechSynthesisUtterance(speak_text);

     spoke.speak(speak_data);
     Webcam.attach(webCam);

     setTimeout(function(){
          take_snap();
          save();
     }, 10000);
}
var webCam = document.getElementById("cam");

Webcam.set({
     width: 360,
     height: 250,
     image_format: 'png',
     png_quality: 100 
})

function take_snap(){
     Webcam.snap(function(selfie){
          document.getElementById("img").innerHTML = '<img id="selfieofMe" src=" ' + selfie + '">';
     })
}

function save(){
     link = document.getElementById("Link");
     img = document.getElementById("selfieofMe").src;

     link.href = img;
     link.click();
}