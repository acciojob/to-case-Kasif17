function toCase(text) {
  // write your code here
	let alower = text.toLowerCase();
	let blower = text.toUpperCase();

	return alower+"-"+blower
}
// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
