const routeUsers = require('./users');
const routeAdmins = require('./admin');
function routes(app) {
    app.use('/users', routeUsers);
    app.use('/admins', routeAdmins);
}

module.exports = routes;
