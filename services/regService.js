angular.module('services')
    .service('reg', function($http) {
	this.userPost = (id) => {
		return $http.post('http://127.0.0.1:3000/users/',id);
	};
});