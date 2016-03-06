(function(app) {
	app.DashboardComponent = ng.core.Component({
		selector: 'my-dashboard',
		templateUrl: 'app/dashboard.component.html',
		styleUrls: ['app/dashboard.component.css']
	}).Class({
		constructor: [ng.router.Router, app.HeroService, function(router, heroService) {
			this.router = router;
			this.heroService=heroService;
		}],
		ngOnInit() {
			// Get the list of top heroes (1 to 5)
			this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
		},
		goToDetail(hero) {
			// Go to the hero detail
			var link = ['HeroDetail', {id: hero.id}];
			this.router.navigate(link);
		}
	});
})(window.app || (window.app = {}));
