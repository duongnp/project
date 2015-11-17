var cubeflous : GameObject;
var gui : GameObject;
var canUse : boolean;
var monTextture : Texture;
function Start(){
	canUse = true;
}
function OnTriggerEnter(monplayer : Collider){
	if((monplayer.gameObject.tag == "Player")&&(canUse == true)){
		monplayer.GetComponent(player).flous += 1;
		canUse = false;
		gui.GetComponent(GUIlabel).labelData.text = (monplayer.GetComponent(player).flous).ToString();
		cubeflous.renderer.material.mainTexture = monTextture;		
	}
}