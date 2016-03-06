(function(app) {
	/**
	 * Bootstrap the main component when the DOM was loaded
	 */
	document.addEventListener('DOMContentLoaded', function() {
		ng.platform.browser.bootstrap(app.AppComponent);
	});
})(window.app || (window.app = {}));