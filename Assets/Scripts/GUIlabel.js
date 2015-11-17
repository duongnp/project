#pragma strict
var labelData : GUIContent;
var labelStyle: GUIStyle;
var width : int ;
var height: int;
var anchorX : int;
var anchorY : int;
function Start () {
	
}

function Update () {

}

function OnGUI(){
   GUI.Label(Rect(anchorX,anchorY,width,height),labelData,labelStyle);
}