#pragma strict

var player : GameObject;
function Start () {

}

function Update () {
	transform.position.x = Mathf.Lerp(transform.position.x ,player.transform.position.x,3* Time.deltaTime);
}