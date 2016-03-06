(function(app) {
	/**
	 * Hero service in ES5. Define an empty function and add methods to the prototype
	 */
	app.HeroService = function() {};

	// Get the list of heroes from the mock of hero list
	app.HeroService.prototype.getHeroes = function() {
		return Promise.resolve(HEROES);
	};

	// Get one hero by it's id
	app.HeroService.prototype.getHero = function(id) {
		return Promise.resolve(HEROES).then(
			heroes => heroes.filter(hero => hero.id === id)[0]
		);
	};
})(window.app || (window.app = {}));
