database = firebase.database()

const name = localStorage.getItem('val1')
const email = localStorage.getItem('val2')
const no = localStorage.getItem('val3')
const work = localStorage.getItem('val4')
const qun = localStorage.getItem('val5')
 

database.ref('/Data/' + no).set({
        name:name,
        Email:email,
        Number:no,
        Work:work,
        Quantity:qun,
    
    });

function gmail(){
    Email.send({
        SecureToken : "94565efe-b78e-4a07-b75c-e7540f4f6cb9",
        To : 'anilmultiservice@gmail.com',
        From : email,
        Subject : "Request form",
        Body :  `Hi! I am ${name} My Requirment Is For ${work} Quantity ${qun} You Can Contact Me Through ${no} And Email ${email}`
    }).then(
      message => alert(message)
    );
}
