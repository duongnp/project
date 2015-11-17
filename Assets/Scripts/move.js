#pragma strict

var direction : int;
function Start () {
 direction = 1;
}

function Update () {
	transform.position.x -= 0.05 * direction;
	
	var hit1 : RaycastHit;
	if(Physics.Raycast(transform.position,Vector3.right,hit1)){
		if(hit1.distance<0.6){
			direction = 1;
		}
	}
	var hit2 : RaycastHit;
	if(Physics.Raycast(transform.position,-Vector3.right,hit2)){
		if(hit2.distance<0.6){
			direction = -1;
		}
	}
	
}