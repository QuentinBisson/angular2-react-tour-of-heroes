(function(app) {

	/**
	 * This component displays the list of heroes
	 */
	app.HeroListComponent = ng.core.Component({
		selector: 'hero-list',
		directives: [app.HeroDetailComponent],
		templateUrl: 'app/hero-list.component.html',
		styleUrls: ['app/hero-list.component.css']
	})
	.Class({	
		constructor: [ng.router.Router, app.HeroService, function(Router, HeroService) {
			// Init the heroes property as an empty array, in case a server error occurs
			this.heroes = [];

			// Init the properties
			this.router = Router;
			this.heroService = HeroService;
		}],

		onSelect(hero) {
			// Select a hero
			this.selectedHero = hero;
		},

		getHeroes() {
			// Get the list of heroes from the service and fill the heroes property in the class
			this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		},

		goToDetail() {
			 // Redirect to he hero detail view
			this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
		},
		ngOnInit() { // Lifecyle hook called by angular2 when the application is ready to call the service layer
		 	// Call the class getHeroes method to fill the list of heroes
			this.getHeroes();
		}
	});
})(window.app || (window.app = {})); 
