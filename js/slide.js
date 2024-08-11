const slides =  document.querySelectorAll(".slide")
var counter = 0;


slides.forEach(
(slide,index)=>{

  slide.style.left =`${index * 100}%` 
}
)
const goPrev = ()=>{
  counter--
  slideImage()
}
const goNext = ()=>{
  counter++
  slideImage()
 
}
const slideImage = ()=>{
 slides.forEach(
  (slide)=>{
    if(slide.style.transform == `translateX(-${800}%)`){
      
      counter=0
  } 
    slide.style.transform = `translateX(-${counter*100}%)`
  
  }
 )
}


function a(){
counter++
  slideImage()
}
setInterval (a,2500)