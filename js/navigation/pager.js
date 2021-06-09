import {default as View} from '../view';
import {default as Breadcrumb} from "./breadcrumb";


var Pager = {
	bind: function (callback) {
		$('li.page-item').off().on('click', 'a.page-link', function (e) {
			e.preventDefault();
			View.load(e.currentTarget.href, function () {
				Pager.bind(callback);
				var title = $(this).find('h4.mb-0').text().split(':')[1].trim().replace(',', '').split(' ');
				Breadcrumb.reset(1);
				Breadcrumb.push([title[2], title[0], title[1]])

			});
		})
		console.log(callback);
		if (typeof callback !== 'undefined') {
			callback();
		}
	}
}

export default Pager;
