function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(clissifyCanvas);
    synth=window.speechSynthesis;
}
function clearCanvas() {
    background("white");
}
function preload(){
    classifier=ml5.imageClassifier('Doodlenet');
}
function draw(){
    //Set stroke wieght to 13
    strokeWeight(13);
    //Set stroke clolr to black
    stroke(0);
    if(mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
    function clissifyCanvas(){
        classifier.classify(canvas,gotResult);
    }
    function gotResult(error,results) {
        if (error){
            console.error(error);
        }
        console.log(results);
        document.getElementById('label').innerHTML='Label:' +results[0].label;
        document.getElementById('confidence').innerHTML='Confidence:'+ Math.round(results[0].confidence*100)+'%';




            utterThis=new SpeechSynthesisUtterance(results[0].label);
            synth.speak(utterThis);
    }
