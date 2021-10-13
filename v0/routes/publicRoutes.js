const publicRoutes = {
    'POST /user/login': 'UserController.login',
    'GET /customerapp/category/getAll': 'CategoryController.getAll',
    'GET /customerapp/subcategory/getAll': 'SubcategoryController.getAll'
};

module.exports = publicRoutes;