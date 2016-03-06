(function(app) {
	/**
 	 * For Angular2 project written in ES5, we need to encapsulate Angular2 code in IIFE (Immediatly Invoked Function Expressions).
 	 * 
 	 * We define a global app variable in the brower OBJECT window to encapsulate the application in the module.
 	 * With this, it's possible to define several modules as well as reduce the code imprint in the browser and improve performances.
 	 * This is how vanilla JS application should be done.
 	 *
 	 * With ES6/2015 (AMD, TypeScript, etc.), this is done with export and import elements.
 	 */

 	/*
	 * Define the Main component in the index file
	 */
	app.AppComponent = ng.core.Component({
		selector: 'my-app',
		templateUrl: 'app/app.component.html',
		styleUrls: ['app/app.component.css'],
		providers: [ng.router.ROUTER_PROVIDERS, app.HeroService],
		directives: [ng.router.ROUTER_DIRECTIVES]
	}).Class({	
		constructor: function() {
			// Use this to define class variables
			this.title = 'Tour of heroes';
		}
	});


	/* 
	 * Define the routes for the components.
	 * To add the router on the same component, we use the parentheses at the end
	 * It works because angular2 uses the decorator pattern. In using this, we use the same object. 
	 * We could separate Component, Class and RouteConfig 
	 */ 
	app.AppComponent = ng.router.RouteConfig([
		{
			path:'/dashboard',
			name: 'Dashboard',
			component: app.DashboardComponent,
			useAsDefault: true
		}, {
        	path: '/heroes',
            name: 'Heroes',
            component: app.HeroListComponent
        }, {
			path: '/detail/:id',
			name: 'HeroDetail',
			component: app.HeroDetailComponent
		}
	])(app.AppComponent);
 	
})(window.app || (window.app = {})); 
