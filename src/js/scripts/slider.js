  
const slider = function() {
  let slider = document.getElementById('slider');
  let swich = document.getElementsByClassName('swich__button');

  for(let i=0; i < swich.length; i++) {
    swich[i].addEventListener('click', function() {
    
      for(let j=0; j < swich.length; j++) {
        swich[j].classList.remove('swich__button_active');
      }
        this.classList.add('swich__button_active');
        slider.style.left = -(i*446) + 'px';
    });
  }
}();

module.exports = slider;