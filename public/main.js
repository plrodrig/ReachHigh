angular
	.module('itunes', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'templates/index.html',
			})
			.when('/education/', {
				templateUrl: 'templates/education.html',
				controller: 'EducationController',
				controllerAs: 'vm',
				resolve:{
					videos: function(KhanAcademy){
						return KhanAcademy.findAllEduVideos();
					}

				}
			})
			.when('/jobs/', {
				templateUrl: 'templates/jobs.html',
				controller: 'JobsController',
				controllerAs: 'vm',
				resolve:{
					jobs: function(Glassdoor){
						return Glassdoor.findAllJobs();
					},
					selectedJobs: function(Glassdoor){
						return Glassdoor.findASelectedJobPath();
					}
				}
			})
			.when('/timeline/', {
				templateUrl: 'templates/timeline.html',
				controller: 'TimelineController',
				controllerAs: 'vm',
				
			})

			.otherwise({
				redirectTo: '/'
			});

	});
