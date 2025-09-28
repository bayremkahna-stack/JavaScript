function groceryTracker(){
    let gr1,gr2,gr3;
    gr1=parseFloat(document.getElementById("gr1").value);
    gr2=parseFloat(document.getElementById("gr2").value);
    gr3=parseFloat(document.getElementById("gr3").value);
    document.getElementById("totalAmount").innerHTML=`The total amount is : $`+(gr1+gr2+gr3);
}