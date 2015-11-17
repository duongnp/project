#pragma strict
var moveDirection : Vector3 = Vector3.zero;
var speed : float;
var gravity : float;
var jumpSpeed : float;
var distanceToGround : float;
var distanceToTop :float;
var flous: int;
var marioAnimator : Animator; 
var isJump : boolean;
var scaleX : float ;
var scaleY : float;
var isBig : boolean;
var hasGun : boolean;
var bullet : GameObject;
var point : GameObject;
function Start () {
	flous = 0;	
	distanceToGround = 0;
	distanceToTop = 0;
	speed = 5;
	gravity = 40;
	jumpSpeed = 20;
	marioAnimator = GetComponent(Animator);
	isJump = false;
	scaleX = 1.0f;
	scaleY = 1.0f;
	isBig = false;
	hasGun = true;
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	if(Input.GetButton("Horizontal")){
	 controller.Move(new Vector3(1,0,0)* Input.GetAxis("Horizontal")* speed * Time.deltaTime);
	}
	var mSpeed : float =  Input.GetAxis("Horizontal");
	marioAnimator.SetFloat("speed",Mathf.Abs(mSpeed));
	
	if(mSpeed > 0){
		transform.localScale = new Vector2(scaleX,scaleY);		
	} 
	else if(mSpeed< 0){
		transform.localScale = new Vector2(-scaleX,scaleY);
	}
	
	if(Input.GetButtonDown("Fire1") && hasGun == true){
		Instantiate(bullet,point.transform.position,point.transform.rotation);
	}
	
	if(Input.GetKeyDown("left shift")){
		speed = 10;
	}
	
	if(Input.GetKeyUp("left shift")){
		speed = 5;
	}
	var hit : RaycastHit;
	if(Physics.Raycast(transform.position,-Vector3.up,hit)){
	 distanceToGround = hit.distance;
	}
	else{
	 distanceToGround = 0;
	}
	var hit2 : RaycastHit;
	if(Physics.Raycast(transform.position,Vector3.up,hit2)){
	 distanceToTop = hit2.distance;
	}
	else{
	 distanceToTop = 0;
	}
	
	if((((distanceToGround < 0.7)&& isBig == false)||((distanceToGround < 1.2)&&isBig == true))
	&&(distanceToGround!= 0)){
		isJump = false;
		if(Input.GetButtonDown("Jump")){
	 	moveDirection.y = jumpSpeed;
	 	isJump = true;
		}
	}
	else{
		moveDirection.y -= gravity*Time.deltaTime;
	}		
	
	if((distanceToTop<0.8)&&(distanceToTop!=0)){
		moveDirection.y =- gravity*Time.deltaTime;
	}
	marioAnimator.SetBool("jump",isJump);
	controller.Move(moveDirection*Time.deltaTime);
}