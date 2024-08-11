const bt = document.getElementById("bto1")
const ratingInput1 = document.querySelector('#rating');
 
db = firebase.database()
let b = 1

console.log(ratingInput1)

bt.addEventListener("click",()=>{
 
var d =  new Date();
 
var bt90 = document.getElementById("name3").value 
localStorage.setItem("date",d)
var date1 =  localStorage.getItem('date')
var final_date = date1.slice(0,25)
var name2 = document.getElementById('name2').value
var rating2 = ratingInput1.value
swal("Thank You","Comment Added SuccessFully","success")
db.ref('/Comments/' + name2).set({
  comment:bt90,
  date:final_date,
  rating:rating2,
  name: name2,
 
  })
})
