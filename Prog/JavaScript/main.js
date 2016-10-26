function Reproduce_audio(NOMB_PIST) {
	var audio = new Audio(NOMB_PIST);
	if (audio.play() ==true) {
		audio.remove()
	}else{
		audio.play();
	}
}
