import 'datatables.net-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-select-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import {default as Card} from './card';
import 'yadcf'
import 'select2'
import {default as View} from "./view";
import {default as Navigation} from './navigation';
import User from "./models/user";


String.prototype.toTitle = function (prepend = '', suffix = '', append = '') {
	return prepend.slice(0, 1).toUpperCase() + prepend.slice(1, prepend.length) + ' ' +
		this.slice(0, 1).toUpperCase() + this.slice(1, this.length) +
		append.slice(0, 1).toUpperCase() + append.slice(1, append.length)
}

String.prototype.capitalizeFirstLetter = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

$('.sidebar-close').click(function () {
	$('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');
});

Card.Header.Buttons.bind();


$(document).ready(function () {
	'use strict';
	$.ajaxSetup({
		headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
	});
	Navigation.Topbar.init();
	Navigation.Window.init();
	$("body").tooltip({selector: '[data-toggle=tooltip]'});

	// Init logic here


});
