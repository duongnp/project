var bonus : GameObject;
var marioAnimator : Animator;
function OnTriggerEnter(monplayer : Collider){
	if(monplayer.gameObject.tag == "Player"){		
		Destroy(bonus.gameObject);
		Debug.Log("Fuck u");
		marioAnimator = monplayer.GetComponent(Animator);
		
		if(bonus.gameObject.tag == "Nam"){
			marioAnimator.SetBool("eat",true);						
			marioAnimator.SetInteger("state",2);
			marioAnimator.SetBool("eat",false);
			monplayer.transform.position.y += 0.5;
			monplayer.GetComponent(CharacterController).height = 2.1;
			monplayer.GetComponent(CharacterController).radius = 0.6;
			monplayer.GetComponent(player).isBig = true;		
		}
	}
}
