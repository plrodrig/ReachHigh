angular
	.module('itunes', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: '/templates/index.html',
				controller: 'SongsSearchController',
				controllerAs: 'vm',
			})
			.when('/artists', {
				templateUrl: '/templates/artists.html',
				controller: 'ArtistsController',
				controllerAs: 'vm',
				resolve:{

					artists: function(Artist){
						return Artist.findAll();

					}
				}
			})

			.when('/artists/:artistId',{
					templateUrl: '/templates/artist.html',
					controller: 'ArtistController',
					controllerAs: 'vm',
					resolve:{
						id: function($route, $http, $location){
							var id = $route.current.params.artistId;
							return id;
						}
					}
				})
			.when('/search/', {
				templateUrl: '/templates/search.html',
				controller: 'ArtistSearchController',
				controllerAs: 'vm',
				resolve:{
					artist: function($route, $http, $location){
					}
				}
			})
			.when('/education/', {
				templateUrl: '/templates/education.html',
				controller: 'EducationController',
				controllerAs: 'vm',
				resolve:{
					videos: function(KhanAcademy){
						return KhanAcademy.findAllEduVideos();
					}
				}
			})
			.when('/jobs/', {
				templateUrl: '/templates/jobs.html',
				controller: 'JobsController',
				controllerAs: 'vm',
				resolve:{
					jobs: function(Glassdoor){
						return Glassdoor.findAllJobs();
					}
				}
			})

			.otherwise({
				redirectTo: '/'
			});

	});
