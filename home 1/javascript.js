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
