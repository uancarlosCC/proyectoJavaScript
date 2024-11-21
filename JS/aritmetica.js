function sumar(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadosuma=parseFloat(valor1)+parseFloat(valor2);
    let resultadoTotal=document.getElementById("resultado");
    
    if(valor1==""||valor2==""){
    alert("El campo esta vacio");
    }
    else{
        resultadoTotal.innerHTML="El resultado es: " + resultadosuma;
    }  
}
function restar(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoresta=parseFloat(valor1)-parseFloat(valor2);
    let resultadoTotal=document.getElementById("resultado");
    
    if(valor1==""||valor2==""){
    alert("El campo esta vacio");
    }
    else{
        resultadoTotal.innerHTML="El resultado es: " + resultadoresta;
    }  
}
function multiplicar(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadomultiplicar=parseFloat(valor1)*parseFloat(valor2);
    let resultadoTotal=document.getElementById("resultado");
   
    if(valor1==""||valor2==""){
    alert("El campo esta vacio");
    }
    else{
        resultadoTotal.innerHTML="El resultado es: " + resultadomultiplicar;
    }  
}
function dividir(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadodividir=parseFloat(valor1)/parseFloat(valor2);
    let resultadoTotal=document.getElementById("resultado");
    
    if(valor1==""||valor2==""){
    alert("El campo esta vacio");
    }
    else{
        resultadoTotal.innerHTML="El resultado es: " + resultadodividir;
    }  
}