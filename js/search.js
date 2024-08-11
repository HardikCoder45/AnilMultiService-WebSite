const search = ()=>{
const searchbox = document.getElementById("search").value.toUpperCase()
const storeitems = document.getElementById("All_products")
const product =  document.querySelector(".product1")
const pname = document.getElementsByTagName("h2")
const nav2 = document.querySelector('.end')

for(var i = 0; i< pname.length; i++){
let match = product[i].getElementsByTagName('h2')[0]

if(match){
let val = match.textContent || match.innerHTML

if(val.toUpperCase().indexOf(searchbox) > -1){
product[i].style.display = "";


}
else{
    product[i].style.display = "none";
    nav2.style.display = "none";
}
}
}
}