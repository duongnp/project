#pragma strict

var direction : int;
var destroy : boolean;
function Start () {	
	direction = 1;
	if(Input.GetAxis("Horizontal")>0){
		direction= 1;
	}
	if(Input.GetAxis("Horizontal")<0)
		direction = -1;	 
}
function OnTriggerEnter(monplayer : Collider){
	if((monplayer.gameObject.tag == "Player")){
		destroy = false;
	}		
}
function Update () {	
	destroy = true;
	transform.position.x += 0.1 * direction;	
	var hit1 : RaycastHit;
	if(Physics.Raycast(transform.position,Vector3.right,hit1)){
		if(hit1.distance<0.1){			
			if(destroy == true){
				Destroy(this.gameObject);
			}
		}
	}
	var hit2 : RaycastHit;
	if(Physics.Raycast(transform.position,-Vector3.right,hit2)){
		if(hit2.distance<0.1){			
			if(destroy == true){
				Destroy(this.gameObject);
			}
		}
	}
}
