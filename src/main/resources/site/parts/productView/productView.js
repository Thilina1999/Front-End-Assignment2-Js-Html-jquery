var lib = {
    thymeleaf: require('/lib/thymeleaf'),
    util: require('/lib/util'),
    productService: require('/services/productService'),
    categoryService: require('/services/categoryService')

}

exports.get = function (req) {
    var model = {}
    var view = resolve('productView.html');
    model = {
        productList: lib.productService.getProduct(),
        categoriesList: lib.categoryService.getCategory()
    }
    return {
        body: lib.thymeleaf.render(view, model)
    };
};

function productView() {
    lib.util.log("productView");
}