const link = document.getElementsByClassName("link")[0];
const menuhambur = document.getElementsByClassName("menu")[0];
const hamburgesa = document.getElementById("menu");
let abierto = false;


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