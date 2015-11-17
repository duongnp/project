#pragma strict
var marioAnimator : Animator;
var moveDirection : Vector3 = Vector3.zero;
var speed : float;
var gravity : float;
function Start(){
	speed = 0.8;
}
function OnTriggerEnter(monplayer : Collider){
	if(monplayer.gameObject.tag == "Player"){
		marioAnimator = monplayer.GetComponent(Animator);
		gravity = monplayer.GetComponent(player).gravity;
		marioAnimator.SetBool("death",true);
		moveDirection.y = monplayer.transform.position.y+speed;
		moveDirection.z = -2;
		var controller : CharacterController = monplayer.GetComponent(CharacterController);		
		controller.Move(moveDirection);
		Debug.Log("Hello");
	}
}