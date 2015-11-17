#pragma strict

function Update () {
	if(transform.position.y< -3){
		Destroy(this.gameObject);
	}
}