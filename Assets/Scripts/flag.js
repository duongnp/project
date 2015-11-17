#pragma strict

function OnTriggerEnter(monplayer : Collider){
	if(monplayer.gameObject.tag == "Player"){
		Application.LoadLevel("Scene2");
	}
}