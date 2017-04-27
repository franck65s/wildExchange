angular.module('services')
	.service('getProfil', function ($http) {
		this.getInfo = (paramId) => {
			return $http.get('http://127.0.0.1:3000/Users/' + paramId);
		}
		this.sendInfo = (paramId,add) => {
			return $http.patch('http://127.0.0.1:3000/Users/' + paramId, add);
		}
	});
