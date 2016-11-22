angular.module('myApp.authentification', [])
    .factory('authentification', authentification);


function authentification() {
    const user_list = [
        {username:'admin',password:'admin'},
        {username:'user',password:'user'},
        {username:'Tony',password:'motdepasse'},
    ];
    
    let isAuthentified = false;
    
    const service = {
        login: login,
        isAuthentified : isAuthentified,
    };
    
    function login(loginUser){
        if(!angular.equals([],
                user_list.filter(function(user){ return user.username === loginUser.username
                && user.password === loginUser.password ;})))
        {
            service.isAuthentified = true;
        }
        else
        {
          service.isAuthentified = false;
        }
        
    }
    return service;
}