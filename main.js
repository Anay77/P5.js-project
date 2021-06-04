
function take_snapshot(){
      save('student_name.png');
} 
function setup() {
      canvas = createCanvas(640, 480);
       canvas.position(110, 250);
        video = createCapture(VIDEO);
         video.hide(); tint_color = "";
         } 

         function draw() {
          image(video,230,150,220,200);
          stroke(255,0,0);
          circle (50,50,80);
          
          fill(0,128,0);
          stroke(0,128,0);
          rect(90,40,460,20);
          
          fill(255,0,0);
          circle (510,50,80);

          fill(0,128,0);
          stroke(0,128,0);
          rect(520,20,20,440);
          
          fill(255,0,0);
          circle (50,50,80);

          fill(0,128,0);
          stroke(0,128,0);
          rect(50,440,460,20);
          
          fill(255,0,0);
          circle (510,440,80);

          fill(0,128,0);
          stroke(0,128,0);
          rect(90,40,20,460);
          
          fill(255,0,0);
          circle (60,440,80);
         }