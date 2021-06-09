import {Breadcrumb} from "../navigation";

function rebind() {
	$('div.float-right').find('a.btn-success').off();
	bind();
}

function bind() {
	/* bind logic here */
	$('div.card-header > div.float-right').off().on('click', 'a.btn-success', function (e) {
		e.preventDefault();
		/* Success button logic here */
	})
	$('div.float-right').on('click', 'a.btn-danger', function (e) {
		e.preventDefault();
		/*  Danger button logic here*/
	})
}

export default {
	bind,
	rebind
}
