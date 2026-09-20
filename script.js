//your JS code here. If required.
const a=document.getElementById("counter")
const btn=document.getElementById("incrementBtn");
	let count=0;
function Incriment() {
	count++;
	a.innerHTML=count;
	alert(count);
}
