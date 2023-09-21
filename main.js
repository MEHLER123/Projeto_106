function classificar(){ 

    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/esn8_IPxN/model.json' , modelReady)
 } 

 function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error , results){
    console.log("resultado OK!");
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomR = Math.floor(Math.random()* 255)+ 1;
        randomG = Math.floor(Math.random()* 255)+ 1;
        randomB = Math.floor(Math.random()* 255)+ 1;
        document.getElementById("result_label").innerHTML = "Posso ouvir: "+ results[0].label;
        document.getElementById("result_count").innerHTML = "Precisão: "+ (results[0].confidence *100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+ randomR + ", " + randomG + ", " + randomB + " ) " ;
        document.getElementById("result_count").style.color = "rgb("+ randomR + ", " + randomG + ", " + randomB + " ) " ;
        img1 = document.getElementById("ouvido");
        
        if(results[0].label == "Cachorro") {
            img1.src = "giphy (2).gif";
            
        } 
       
        else if(results[0].label == "Gato") {
            img1.src = "gato.gif";
            
        } 

         else if(results[0].label == "galinha") {
            img1.src = "giphy.gif";
            
        } 

        else if(results[0].label == "vaca") {
            img1.src = "giphy (1).gif";
            
        } 
        


        


        
    }   
    
}
//{}