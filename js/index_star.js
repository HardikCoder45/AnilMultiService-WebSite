
let table2 = ""
var db = firebase.database()
db.ref("Comments").on("value", (value)=>{
console.log(value.val())
var values1 = Object.values(value.val())
values1.map((ad)=>{
console.log(ad)



table2 += `
<div class="man">
<img src="./libraries/man1.png" class="man" width="40px" height="35px">
<p class="name5">${ad.name}</p>
<p class="name6">${ad.date}</p>
</div>
<input class="ratings" value="${ad.comment}"  readonly></input>

 
<div class="st">
<span class="fa fa-star ${ad.rating<1 ? "" : "checked"} "></span>
  <span class="fa fa-star ${ad.rating<2 ? "" : "checked"}"></span>
  <span class="fa fa-star ${ad.rating<3 ? "" : "checked"}"></span>
  <span class="fa fa-star ${ad.rating<4 ? "" : "checked"}"></span
  <span class="fa fa-star ${ad.rating<5 ? "" : "checked"}"></span>
 <span class="fa fa-star ${ad.rating<5 ? "" : "checked"}"></span>
</div>`


})
document.getElementById("rating3").innerHTML = table2
})
 