
    $stateProvider
        .state('home', {
            url: '',
            component: 'userLogin',
            resolve: {

            },
        })
        .state({
            name: 'questions',
            url: '/questions',
            component: 'questionsList',
            resolve: {
                login: function (UsersService, $cookies) {
                    VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                }
            }
        })

        .state({
            name: 'users',
            url: '/users',
            component: 'usersList',
            resolve: {
                login: function (UsersService, $cookies) {
                    VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                }

            }
        })

        .state({
            name: 'tags',
            url: '/questions/:tagId/:tagName',
            component: 'questionsList',
            resolve: {
                login: function (UsersService, $cookies) {
                    VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                },

                tagFilter: function ($stateParams) {
                    return {
                        tagId: $stateParams.tagId,
                        tagName: $stateParams.tagName
                    }
                }
            }
        })

        .state({
            name: 'person',
            url: '/users/{personId}',
            component: 'userProfile',
            resolve: {
                login: function (UsersService, $cookies) {
                    VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                },

                person: function ($rootScope, UsersService, $transition$) {
                    return UsersServiceProvider.$get().getPerson($transition$.params().personId);
                }
            }
        })

        .state({
            name: 'questionPost',
            url: '/post',
            component: 'questionPost',
            resolve: {
                login: function (UsersService, $cookies) {
                    VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                }

            }
        })

        .state({
            name: 'nuage',
            url: '/nuage',
            component: 'nuage',
            resolve: {
                login: function (UsersService, $cookies) {
                    VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                }

            }
        })

        .state({
            name: 'questionSpec',
            url: '/questions/{idQuestion}',
            component: 'questionFull',
            resolve: {
                question: function ($rootScope, QuestionsService, $transition$) {
                    return QuestionsService.getSpecificQuestion($transition$.params().idQuestion);
                },
                controller: function (Auth, $state) {
                    if (someCondition) {
                        $state.go('state1');
                    } else {
                        $state.go('state2');
                    }
                }
            }
        })

        .state({
            name: 'addUser',
            url: '/addUser',
            component: 'userCreate',
            resolve: {}
        })

        .state({
            name: 'logUser',
            url: '/logUser',
            component: 'userLogin',
            resolve: {
                users: function ($rootScope, UsersService) {
                }
            }
        })

        .state({
            name: 'questionSpec.postAnswer',
            url: '/newAnswer',
            component: 'answerPost',
            resolve: {
                login: function (UsersService, $cookies) {
                    VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                }

            }
        })
});