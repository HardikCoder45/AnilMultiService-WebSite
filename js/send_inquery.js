function gmail(){

    const name = localStorage.getItem('val1')
const email = localStorage.getItem('val2')
const no = localStorage.getItem('val3')
const des = localStorage.getItem('val4')
const work = localStorage.getItem('val5')

 

    Email.send({
        Host : "smtp.elasticemail.com",
    Username : "customeremail2254@gmail.com",
    Password : "7A25696F9CAB2B9BE44DFEA1D4110855CCB8",
        To : 'anilmultiservice@gmail.com',
        From : 'customeremail2254@gmail.com',
        Subject : "AMS Inquery",
        Body :  `Name: ${name}, Email: ${email}, Mobile: ${no}, Work: ${work}, ${des}`  
    }).then(
  message => {
   window.location.href = "../html/sumbit.html"}
);

Email.send({
        Host : "smtp.elasticemail.com",
    Username : "anilmultiservice@gmail.com",
    Password : "7A9B2427A107332C2563E7233BC3F8452E13",
        To : email,
        From : 'anilmultiservice@gmail.com',
        Subject : "AnilMultiService",
        Body :  `Thank You! For Contacting Us 
        Sir/Mam ${name} We successufully get your requirment for ${work} We will soon contact you on ${no} 
         Give us a Review on:- https://g.page/r/CW57pTTdIgzPEBM/review`  
    })
 

}
function whatsapp(){
    var url = "https://wa.me/9250005522?text=" +  `Name: ${name}, Email: ${email}, Mobile: ${no}, Work: ${work}  ,${des}`  
    
window.open(url, '_blank').focus()
window.location.href = "../html/sumbit.html"
}
function call(){
    swal("Contact","Contact us on:- 9250005522,9250004422 or you will recive call in 10-15 mins",)
}

const name = localStorage.getItem('val1')
const email = localStorage.getItem('val2')
const no = localStorage.getItem('val3')
const des = localStorage.getItem('val4')
const work = localStorage.getItem('val5')

const database = firebase.database()
database.ref('/Data/' + no).set({
        name:name,
        Email:email,
        Number:no,
        description:des,
        Work:work,
    
    });