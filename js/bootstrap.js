window._ = require('lodash');
/*
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as models and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
	window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');
	require('bootstrap');
	require('jquery-ui');
	require('jquery-ui/ui/widgets/datepicker');
	require('jquery-ui-monthpicker');
	require('jquery-timepicker/jquery.timepicker')
	require('select2');
	/*
		require('bs4-summernote');
	*/
	window.JSZip = require('jszip');
	require('./smartgunite');
	require('./dashboard');
	require('./elements');
} catch (e) {
	console.log(e);
}


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

/*
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
     broadcaster: 'pusher',
     key: "311c8059d7deef54ea9f",
     wsHost: window.location.hostname,
	 wsPort: 6001,
	 csrfToken: $('meta[name="csrf-token"]').attr('content'),
     forceTLS: false,
	 disableStats: true,
	 enabledTransports: ['ws', 'wss'] //This was added from issue 86
 });
*/
