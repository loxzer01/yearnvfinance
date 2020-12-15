const getRemainTime = deadline => {
	let now = new Date(),
		remainTime = (new Date(deadline) - now + 1000) / 1000,
		remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
		remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
		remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
		remainDays = Math.floor(remainTime / (3600 * 24));

	return {
		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	}
};


const countdown = (deadline, elem, finalMessage) => {
	const el = document.getElementById(elem);

	const timerUpdate = setInterval ( () =>{
		let time = getRemainTime(deadline);
		el.innerHTML = `
		<div>
			<h2>${time.remainDays}</h2>
			<h4>Days</h4>
		</div>
		<div>
			<h2>${time.remainHours}</h2>
			<h4>Hours</h4>
		</div>
		<div>
			<h2>${time.remainMinutes}</h2>
			<h4>Minutes</h4>
		</div>
		<div>
			<h2>${time.remainSeconds}</h2>
			<h4>Seconds</h4>
		</div>`
	if (time.remainTime <= 1) {
		clearInterval(timerUpdate);
		el.innerHTML = `<div>
			<h2>0</h2>
			<h4>Days</h4>
		</div>
		<div>
			<h2>00</h2>
			<h4>Hours</h4>
		</div>
		<div>
			<h2>00</h2>
			<h4>Minutes</h4>
		</div>
		<div>
			<h2>00</h2>
			<h4>Seconds</h4>
		</div>`;
	}

	}, 1000)
};


countdown("Tue Dec 25 2020 18:08:00 GMT-0400", 'clock')

const close1 = document.getElementsByClassName("down")[0];
const abrir2 = document.querySelectorAll(".count")[0];

abrir2.addEventListener("click", function(e){
	e.preventDefault();
	close1.style.display = "inline-block";
});

close1.addEventListener("click", function(e){
	if (e.target === close1) {
		close1.style.display = "none";
	}
});



