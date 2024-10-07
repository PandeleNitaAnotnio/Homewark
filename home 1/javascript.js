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
Corf = document.getElementById("Corf");
document.getElementById("LaButton3").onclick =labutton_3;


function labutton_3() {
    Day = document.getElementById("Day").value;
    var Carlos 
    
switch (Day){
case "1":
    Carlos = "Monday"
    break
case "2":
    Carlos = "Tuesday"
    break
case "3":
    Carlos = "Wednesday"
    break
case "4":
    Carlos = "Thursday"
    break
case "5":
    Carlos = "Friday"
    break 
case "6":
    Carlos = "Saturday"
    break
case "7":
    Carlos = "Sunday"
    break   
default:
    Carlos = "Error"
    break


}
Corf.innerHTML = Carlos
console.log(Day)

}



