document.getElementById("count-el").innerText=0
//Title:COUNTER APP
//All that I did was create a new element for the header and add it into the web page 
function increment(){
   document.getElementById("count-el").innerText++
   let count = document.getElementById("count-el").innerHTML
   console.log(count)
}

function save(){
   let ptext = document.getElementById("ptext")
   let num = document.getElementById("count-el").innerHTML
   ptext.innerHTML += num + "-";
}
