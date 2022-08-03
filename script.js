function showAnswer(element){
    var x = element.parentElement.nextElementSibling.style.cssText;
    if(x=='max-height: 500px;'){   
        element.style.cssText='transform: rotate(0deg);';     
        element.parentElement.nextElementSibling.style.cssText = "transition:0.3s;max-height:0px;";    
    }
    else{
        element.style.cssText='transform: rotate(180deg);'; 
        element.parentElement.nextElementSibling.style.cssText = "max-height:500px;";
    }
}