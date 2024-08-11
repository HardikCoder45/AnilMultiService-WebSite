const work = document.getElementById("Work")
const work1 = localStorage.getItem('val4')
 
work.value = work1
 
function update(){

    const form = document.getElementById("form")

    const val1 = document.getElementById("name").value;
    const val2 = document.getElementById("Email").value;
    const val3 = document.getElementById("no").value;
    const val4 = document.getElementById("des").value;
    const val5 = document.getElementById("work").value;
 
   
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

 var a1 = val3.length<10 || isNaN(val3) || val3.charAt(0)!=9 && val3.charAt(0)!=7 && val3.charAt(0)!=8 ? 'false' : 'true'
 var a2 = regx.test(val2) ? 'true' : 'flase'
 var a3 = val1 == "" || val2 == "" || val3 == "" || val4 == "" || val5 == "" ? 'false' : 'true'
 

if(a1 == 'true' && a2 == 'true' && a3 == 'true'){
   
    localStorage.setItem('val1', val1)
    localStorage.setItem('val2', val2)
    localStorage.setItem('val3', val3)
    localStorage.setItem('val4', val4)
    localStorage.setItem('val5', val5)
     

   
    }
 
 
  
    }