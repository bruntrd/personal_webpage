myApp.controller('HomeController', ['$scope', function($scope){

}]);

myApp.controller('ContactController', ['$scope', function($scope){
    $scope.person={};

}]);

myApp.controller('CurlingController', ['$scope', function($scope){
}]);

myApp.controller('CareerController', ['$scope', function($scope){
}]);

myApp.controller('ProjectsController', ['$scope', '$http', function($scope,$http){

    var gitHub = function(){
        return $http.get('https://api.github.com/users/bruntrd?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d').then(function(response){
            if (response.status !== 200){
                throw new Error('failed to get the github stuff');
            }
            console.log(response);
            $scope.projects = response.data;
        })
    };
    gitHub();
    var getRepos = function(){
        $http.get("https://api.github.com/users/bruntrd/repos")
            .success(function(data){
                $scope.repos = data;
                $scope.reposFound= data.length >0;
                console.log(data);
            });
    }
    getRepos();
}]);

myApp.controller('EducationController', ['$scope', function($scope){
}]);
