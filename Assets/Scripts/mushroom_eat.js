
function OnTriggerEnter(monplayer : Collider){
	if(monplayer.gameObject.tag == "Player"){		
		Destroy(this.gameObject);
		var marioAnimator : Animator;
		Debug.Log("Fuck u");
		marioAnimator = monplayer.GetComponent(Animator);		
		marioAnimator.SetBool("eat",true);						
		marioAnimator.SetInteger("state",2);
		marioAnimator.SetBool("eat",false);
		monplayer.transform.position.y += 0.5;
		monplayer.GetComponent(CharacterController).height = 2.1;
		monplayer.GetComponent(CharacterController).radius = 0.6;
		monplayer.GetComponent(player).isBig = true;		
		
	}
}
