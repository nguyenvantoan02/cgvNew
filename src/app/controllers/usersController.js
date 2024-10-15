class usersController {
    register(req, res, next) {
        res.render('users/register');
    }
    login(req, res, next) {
        res.render('users/login');
    }
    forget_pass(req, res, next) {
        res.render('users/forget_pass');
    }
    create_pass(req, res, next) {
        res.render('users/create_pass');
    }
    detail(req, res, next) {
        res.render('users/detail');
    }
}

module.exports = new usersController();
