import {default as Buttons} from './buttons'


function rebindHeaderButtons() {
	Buttons.rebind();
}

function bindHeaderButtons() {
	Buttons.bind();
}


export default {
	Buttons
}

export {
	bindHeaderButtons,
	rebindHeaderButtons
}

