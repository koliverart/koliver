const btns = document.querySelectorAll("[data-target]");
const overlay = document.getElementById('overlay');
const container = document.getElementById('container');


btns.forEach((btn) =>{
	btn.addEventListener('click',function(){
  	let bt = document.querySelector(btn.dataset.target);
    container.style.display = 'flex';
    bt.style.display = 'block';
    overlay.style.display = 'block';
  });
});

container.addEventListener("click", function(){
  location.reload();
});
