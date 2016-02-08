(function(){
    angular.module('app.modules')
        .service('DashboardLanguages', DashboardLanguages);

    function DashboardLanguages() {
        return {
            'en': {
                LOGIN_HEAD: 'Member Login',
                SIGN_IN: 'Sign In',
                PROVIDE_DETAILS: 'Please provide your details',
                REMEMBER_ME: 'Keep me signed in',
                RESET_PASSWORD: 'Reset Password',
                USERNAME: 'Username',
                PASSWORD: 'Password',
                ERROR_AUTHORIZE_HEAD: 'Authorize error!',
                ERROR_AUTHORIZE_BODY: 'You\'ve entered wrong credentials. Please, try again later!'
            },
            'ru': {
                LOGIN_HEAD: 'Авторизация пользователя',
                SIGN_IN: 'Авторизироваться',
                PROVIDE_DETAILS: 'Пожалуйста, заполните поля нижу',
                REMEMBER_ME: 'Оставаться в системе',
                RESET_PASSWORD: 'Восстановить пароль',
                USERNAME: 'Имя пользователя',
                PASSWORD: 'Пароль',
                ERROR_AUTHORIZE_HEAD: 'Ошибка авторизации!',
                ERROR_AUTHORIZE_BODY: 'Вы ввели неправильные данные. Пожалуйста, попробуйте еще раз позже!'
            }
        }
    }
})();