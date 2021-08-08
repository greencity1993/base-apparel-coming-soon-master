const form = document.getElementsByClassName('form');
const input = document.getElementsByClassName('form__input');
const errorElements = document.getElementsByClassName('form__error-element');

form[0].addEventListener('submit', function (event) {
  const input = document.getElementsByClassName('form__input');
  if(!input[0].validity.valid || input[0].value == '') {
    showError(true);
    event.preventDefault();
  }
});


input[0].addEventListener('input', function (event) {
  showError(false);
});

function showError(a){
  if (a == true){
    Array.prototype.forEach.call(errorElements, function(element) {
      element.classList.remove('hidden');
    });
    input[0].style.borderColor = "red";
  }else{
    Array.prototype.forEach.call(errorElements, function(element) {
      element.classList.add('hidden');
    });
    input[0].style.borderColor = "hsl(0, 36%, 70%)";
  }
}