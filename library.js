let el = document.querySelector(".button.is-info");
let modal = document.querySelector(".modal");


el.addEventListener('click', function(e){
  modal.classList.add('is-active');
  let modalClose = document.querySelector('.modal-close.is-large');
  modalClose.addEventListener('click', function(){
    modal.classList.remove('is-active');
  })
});

