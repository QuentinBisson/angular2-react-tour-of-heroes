(function(app) {
	/**
	 * Display the detail of a hero (name and id)
	 */
	app.HeroDetailComponent = ng.core.Component({
		selector: 'my-hero-detail',
		inputs: ['hero'],
		templateUrl: 'app/hero-detail.component.html',
		styleUrls: ['app/hero-detail.component.css']
	}).Class({
		constructor: [app.HeroService, ng.router.RouteParams, function(heroService, routeParams) {
			this.heroService = heroService;
			this.routeParams = routeParams;
		}],
		ngOnInit() {
			// Lifecycle hook called to get a hero by it's id. The id is accessed from the url
    		var id = +this.routeParams.get('id');
    		this.heroService.getHero(id).then(hero => this.hero = hero);
  		}, 
  		goBack() {
  			// Go back to the previous page
			window.history.back();
		}
	});
})(window.app || (window.app = {}));
