var cubebonus : GameObject;
var bonus : GameObject;
var point : GameObject;
var canUse : boolean;
var monTexture : Texture;
function Start(){
	canUse = true;
}
function OnTriggerEnter(monplayer : Collider){
	if((monplayer.gameObject.tag == "Player")&&(canUse == true)){
		Instantiate(bonus,point.transform.position,point.transform.rotation);
		bonus.transform.rotation.y = 0;			
	}
	canUse = false;
	cubebonus.GetComponent(MeshRenderer).enabled = true;
	cubebonus.renderer.material.mainTexture = monTexture;	
}