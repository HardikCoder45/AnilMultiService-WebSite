
 let table1 = ""
 var db = firebase.database()
 db.ref("Comments").on("value", (value)=>{
console.log(value.val())
var values1 = Object.values(value.val())
values1.map((ad)=>{
console.log(ad)

 
 
table1 += `<tr>
<th scope="row" id="d1">${ad.name}</th>
<td>${ad.comment}</td>
<td> 
 
<div class="st">
<span class="fa fa-star ${ad.rating<1 ? "" : "checked"} "></span>
  <span class="fa fa-star ${ad.rating<2 ? "" : "checked"}"></span>
  <span class="fa fa-star ${ad.rating<3 ? "" : "checked"}"></span>
  <span class="fa fa-star ${ad.rating<4 ? "" : "checked"}"></span
  <span class="fa fa-star ${ad.rating<5 ? "" : "checked"}"></span>
 <span class="fa fa-star ${ad.rating<5 ? "" : "checked"}"></span>
</div>
 
</td>
<td>${ad.date}</td>
 
</tr>`
 
 
})
document.getElementById("table_body1").innerHTML = table1
 })
 