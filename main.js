const link = document.getElementsByClassName("link")[0];
const menuhambur = document.getElementsByClassName("menu")[0];
const hamburgesa = document.getElementById("menu");
let abierto = false;

const close = document.getElementsByClassName("app_network")[0];
const abrir = document.querySelectorAll(".app")[0];

abrir.addEventListener("click", function(e){
	e.preventDefault();
	close.style.display = "inline-block";
});

close.addEventListener("click", function(e){
	if (e.target === close) {
		close.style.display = "none";
	}
});

const togglemenu = () => {
	link.classList.toggle("link2");
	link.style.trasition = "transform 0.5s ease-in-out";
}
menuhambur.addEventListener("click", function(){
	togglemenu();
	if(document.querySelector(".link.link2")){
		abierto=true;
	}else {
		abierto=false;
	}
})

window.addEventListener("click", function(e){
	if (abierto == true){
		if (e.target !== hamburgesa){
			togglemenu();
			abierto=false;
		}
	}
})
