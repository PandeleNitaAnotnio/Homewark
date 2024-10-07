document.getElementById("DiffButton").onclick = logic;
Tf = document.getElementById("TorF");
function logic ()
{
    DividedNumber = document.getElementById("line").value;
    x = DividedNumber % 10; 
    console.log(x === 0)
//if (x === 0) { console.Log (True)
///} else {console.Log (false)}

console.log(DividedNumber)

Tf.innerHTML = (x === 0)

}
