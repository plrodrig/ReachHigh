describe("glassdoor service", function(){
  var jobs, $httpBackend;
  //set up module to test
  beforeEach(module('reachHigh', ['ngRoute']));
  beforeEach(inject(function($injector){
    jobs = $injector.get('jobs');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
    .whenGET('http://api.glassdoor.com/api/api.htm?t.p=48886&t.k=eedS6gVRSCm&userip=192.168.43.42&useragent=&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=software')
    .respond(200, {
      results: [
      {
      nextJobTitle: "software engineer",
      frequency: 55,
      frequencyPercent: 33.53658536585366,
      nationalJobCount: 84202,
      medianSalary: 75566
      },
      {
      nextJobTitle: "senior software engineer",
      frequency: 16,
      frequencyPercent: 9.75609756097561,
      nationalJobCount: 84202,
      medianSalary: 100000
      },
      {
      nextJobTitle: "software design engineer",
      frequency: 12,
      frequencyPercent: 7.317073170731707,
      nationalJobCount: 84202,
      medianSalary: 84552
      },
      {
      nextJobTitle: "software test engineer",
      frequency: 10,
      frequencyPercent: 6.097560975609756,
      nationalJobCount: 84202,
      medianSalary: 64938
      },
      {
      nextJobTitle: "project manager",
      frequency: 9,
      frequencyPercent: 5.487804878048781,
      nationalJobCount: 90853,
      medianSalary: 85000
      },
      {
      nextJobTitle: "software developer",
      frequency: 9,
      frequencyPercent: 5.487804878048781,
      nationalJobCount: 38895,
      medianSalary: 75000
      },
      {
      nextJobTitle: "consultant",
      frequency: 8,
      frequencyPercent: 4.878048780487805,
      nationalJobCount: 43263,
      medianSalary: 77000
      },
      {
      nextJobTitle: "system administrator",
      frequency: 7,
      frequencyPercent: 4.2682926829268295,
      nationalJobCount: 37872,
      medianSalary: 61859
      },
      {
      nextJobTitle: "project name",
      frequency: 6,
      frequencyPercent: 3.6585365853658534,
      nationalJobCount: 7985,
      medianSalary: 79000
      },
      {
      nextJobTitle: "firmware engineer",
      frequency: 6,
      frequencyPercent: 3.6585365853658534,
      nationalJobCount: 84202,
      medianSalary: 80679
      },
      {
      nextJobTitle: "senior quality analyst",
      frequency: 6,
      frequencyPercent: 3.6585365853658534,
      nationalJobCount: 15815,
      medianSalary: 73300
      },
      {
      nextJobTitle: "research software engineer",
      frequency: 6,
      frequencyPercent: 3.6585365853658534,
      nationalJobCount: 84202,
      medianSalary: 91385
      },
      {
      nextJobTitle: "software quality assurance contractor",
      frequency: 6,
      frequencyPercent: 3.6585365853658534,
      nationalJobCount: 7843,
      medianSalary: 60000
      },
      {
      nextJobTitle: "store manager",
      frequency: 4,
      frequencyPercent: 2.4390243902439024,
      nationalJobCount: 154744,
      medianSalary: 45790
      },
      {
      nextJobTitle: "graphic designer",
      frequency: 4,
      frequencyPercent: 2.4390243902439024,
      nationalJobCount: 18521,
      medianSalary: 42500
      }
      ]
    });
  }));

  it("findAllJobs() should return an array of jobs", function(){
    jobs.findAllJobs().then(function(allJobs){
      expect(allJobs.length).toEqual(3);
    });
    $httpBackend.flush();
  });
});
