var lib = {
    thymeleaf: require('/lib/thymeleaf'),
    util: require('/lib/util'),
    categoryService: require('/services/categoryService')
}
exports.get = function (req) {
    let model = {};
    var view = resolve('productCategory.html');
    model.categoriesList = lib.categoryService.getCategory();
    return {
        body: lib.thymeleaf.render(view, model)
    };
};
exports.post = function (req) {
    var object = {};
    var response;
    if (req.params.action === "add") {
        object = {
            name: req.params.name,
            code: req.params.code
        };
        response = lib.categoryService.saveCategory(object);
    } else if (req.params.action === "update") {
        object = {
            name: req.params.name,
            code: req.params.code
        };
        response = lib.categoryService.updateCategory(req.params.id, object);
    } else if (req.params.action === "delete") {
        response = lib.categoryService.deleteCategory(req.params.id);
    }
    return {
        body: {
            status: response.status,
            message: response.message
        }
    }
}

