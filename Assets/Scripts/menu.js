#pragma strict

function OnGUI(){
	if(GUI.Button(Rect(10,10,150,50),"Play!")){
		Application.LoadLevel("UnityCubes");
	}
}