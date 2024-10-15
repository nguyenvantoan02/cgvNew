class adminsController {
    index(req, res, next) {
        res.render('admin/admin_pages', { layout: 'admin' });
    }
}

module.exports = new adminsController();
