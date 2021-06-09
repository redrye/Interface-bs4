import {default as View} from '../view';
import {pathElement} from "../variables";


const Namespaces = []

var Breadcrumb = $.extend(pathElement, {

	getNamespace: function () {
		return this.children('li:eq(1)').text().trim();
	},

	pushPath: function (element) {
		if (Array.isArray(element)) {
			for (var i = 0; i < element.length; i++) {
				this.push(element[i]);
			}
		} else {
			this.append('<li class="breadcrumb-item">' + element + '</li>');
		}
	},
	push: function (element, url) {
		this.pushPath(element);
		this.children('li:eq(1)').children('a').off().on('click', function (e) {
			e.preventDefault();
			var windowNamespace = window.location.hash.slice(1).split('/')[0];
			windowNamespace = windowNamespace.charAt(0).toUpperCase() + windowNamespace.slice(1)

		});
		this.children('li:eq(2)').children('a').off().on('click', function (e) {
			e.preventDefault();
			/* callback here */

		});
		this.children('li').nextAll().one('click', function (e) {
			$(this).nextAll().remove();
		});
	},
	pop: function () {
		this.children('li:last').remove();
	},
	refreshLocation: function () {
		window.location.hash = $(this).children('li').nextAll().text().replace(/[\n\r\t]+/gm, '/');
	},
	reset: function (n = 0) {
		/*
		*  0 is the first li element of the the breadcrumb, aka Smartgunite.
		*  1 is the view's namespace
		*  so on and so forth....
		*
		*  0 is the default because of the nextAll function. This will remove
		*  all breadcrumb elements after the specified breadcrumb. So by default
		*  it will remove all breadcrumbs starting from the namespace.
		*
		*/
		this.children('li').eq(n).nextAll().remove();
		return this;
	},
})

export {
	Breadcrumb
};

export default Breadcrumb;
