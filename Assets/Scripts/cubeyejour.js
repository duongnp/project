var cubeyejour : GameObject;
function OnTriggerEnter(monplayer : Collider){
	if(monplayer.gameObject.tag == "Player"){
		Destroy(cubeyejour.gameObject);
	}
}