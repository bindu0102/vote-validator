function validate(){
    let age=document.getElementById("input").value
    let result=document.getElementById("output")
    if(age>18){
       result.innerHTML="valid"
    }
    else{
        result.innerHTML="invalid"
    }
     
}