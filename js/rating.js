const stars = document.querySelectorAll('.star');
const ratingInput = document.querySelector('#rating');


function handleStarClick(e) {
  const clickedRating = parseInt(e.target.getAttribute('data-rating'));

  stars.forEach((star, index) => {
    if (index < clickedRating) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
  ratingInput.value = clickedRating;

  
  console.log(clickedRating)
}

stars.forEach(star => {
  star.addEventListener('click', handleStarClick);
});