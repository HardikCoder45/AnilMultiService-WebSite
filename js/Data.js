//   let table1="";
//    fetch("https://anilmultiservice-afefa-default-rtdb.firebaseio.com/Data.json").then((e)=>{
//     e.json().then((a)=>{
//        var values = Object.values(a)
//        values.map((a)=>{
 

//         table1 += `<tr>
//         <th scope="row" id="d1">${a.name}</th>
//         <td>${a.Number}</td>
//         <td>${a.Email}</td>
//         <td>${a.Work}</td>
//         </tr>`
//        })
//        document.getElementById('table_body').innerHTML = table1
        
//     })
//     })
 
var db = firebase.database()
let table = ""
  db.ref("Data").on("value", ((snapshot)=>{
var snap = snapshot.val()
var values = Object.values(snap)
values.map((a)=>{
 

table += `<tr>
<th scope="row" id="d1">${a.name}</th>
<td>${a.Number}</td>
<td>${a.Email}</td>
<td>${a.Work}</td>
</tr>`
 

})
document.getElementById('table_body').innerHTML = table
}))
 


 
 
