x = 0;
y = 0;
screen_width=0;
screen_hieght=0;
apple="";   
draw_apple = "";
to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);
    
    if(Number.isInteger(to_number))
    {
        draw_apple = "set";

    }
    else{
        draw_apple = "The speech has not recognized a number "
    }
}

function preload()
{
    apple = loadImage(apple.png);
    
}

function setup() {
 screen_width =window.innerWidth;
 screen_hieght= window.innerHeight;
 canvas=createCanvas(screen_width , screen_hieght-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
