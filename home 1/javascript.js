document.getElementById("DiffButton").onclick = logic;
Tf = document.getElementById("TorF");


function logic ()
{
    DividedNumber = document.getElementById("line").value;
    if (DividedNumber === ""){
        Tf.innerHTML = "Error" }
    else{
        x = DividedNumber % 10; 
        Tf.innerHTML = (x === 0)
        }
    
    
//if (x === 0) { console.Log (True)
///} else {console.Log (false)}

///console.log(DividedNumber)

}
document.getElementById("LaButton2").onclick =labutton2_0 ;
Gorf = document.getElementById("Gorf");

function labutton2_0 (){
    D = document.getElementById("N").value;
    C = document.getElementById("Z").value;
    B = document.getElementById("Y").value;
    A = document.getElementById("X").value;
if (D !== ""&& C !== ""&& B !== ""&& A !== "") {

    Gorf.innerHTML = `You will be a(N) ${A} in ${B}, married to ${C}, and you will have ${D} children.`

} 
else{

Gorf.innerHTML = "Error" 


}



}