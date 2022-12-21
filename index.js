const more = document.getElementById('more');
const close = document.getElementById('close');
const moremodal = document.getElementById('moremodal');

more.onclick = function(){
  moremodal.showModal();
}

close.onclick = function(){
  moremodal.close();
}
