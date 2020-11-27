var button = document.querySelectorAll('.registration');
var modal = document.querySelector('.modal');
var closeBut = document.querySelector('.close');
button[0].onclick = function() {
    event.preventDefault();
    modal.classList.add('active');
  };
button[1].onclick = function() {
    event.preventDefault();
    modal.classList.add('active');
};
closeBut.onclick = function() {
    event.preventDefault();
    modal.classList.remove('active');
};
