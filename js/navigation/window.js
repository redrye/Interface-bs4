
var Window = {
	init: function () {
		window.onhashchange = function (e) {
			// console.log(e);
			this.currentLocalUrl = (new URL(e.newURL)).hash.replace('#', '/');
			// console.log(this);
		}
	},
	resume: function () {
		/* resume logic here */
	}
}

export default Window
