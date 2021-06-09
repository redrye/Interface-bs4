import {viewCard} from "../variables";
import {Breadcrumb} from "../navigation";

var Login = {
	init: function () {
		Breadcrumb.reset().push('Login');
		$('#login').on('submit', function (e) {
			e.preventDefault();
			$.post(this.action, $(this).serialize(), function (data, status, xhr) {
				window.location.assign('/dashboard')
			}).fail(function (data, status, xhr) {
				$('#login').FormAlert(data.responseJSON.errors)
			});
		});
		$('#login').find('a.btn-link').on('click', function (e) {
			e.preventDefault();
			viewCard.createModal({
				modal: {
					title: "Reset your password",
					size: 'large',
					ajax: {
						url: '/password/reset',
					}
				},
				ajax: {
					url: '/password/email',
					method: 'POST',
					success: function (data) {
						window.location.assign('/');

					},
					failure: function (data) {
						console.log(data)
					},
					error: function (data, status, xhr) {
						$('#modal-popup').FormAlert(data.responseJSON.errors)
					},
				}
			});
		});
		return false;
	}
}

export default Login;
