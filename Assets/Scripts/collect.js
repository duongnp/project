#pragma strict
var gui : GameObject;
function OnTriggerEnter(monplayer : Collider){
	if(monplayer.gameObject.tag == "Player"){
		Destroy(this.gameObject);
		monplayer.GetComponent(player).flous += 1;
		gui.GetComponent(GUIlabel).labelData.text = (monplayer.GetComponent(player).flous).ToString();
	}
}