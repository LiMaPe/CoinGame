function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

// move the avatar with the arrow keys

window.addEventListener("keyup", function (e) {
if (e.key === "ArrowDown") {
	const currentTopPosition = extractPosition(avatar.style.top);
	avatar.style.top = `${currentTopPosition + 50}px`;
} else if (e.key === "ArrowUp") {
	const currentTopPosition = extractPosition(avatar.style.top);
	avatar.style.top = `${currentTopPosition - 50}px`;
} else if (e.key === "ArrowRight") {
	const currentLeftPosition = extractPosition(avatar.style.left);
	avatar.style.left = `${currentLeftPosition + 50}px`;
	avatar.style.transform = "scale(1,1)";
} else if (e.key === "ArrowLeft") {
	const currentLeftPosition = extractPosition(avatar.style.left);
	avatar.style.left = `${currentLeftPosition - 50}px`;
	avatar.style.transform = "scale(-1,1)";
} 
if (isTouching(avatar,coin)) moveCoin();
});

const extractPosition = (pos) => {
	if(!pos) return 100;
	return parseInt(pos.slice(0,-2))			//to get rid of the px and the The parseInt() function parses a string and returns an integer.
};

//move the coin when the avatar reaches it. 
const moveCoin = () => {
const widthRand = Math.floor(Math.random() * window.innerWidth);
const  heightRand = Math.floor(Math.random() * window.innerHeight);
coin.style.left = `${widthRand}px`;
coin.style.top = `${heightRand}px`;
};

