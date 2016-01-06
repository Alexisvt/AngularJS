namespace app.common {

    //interface IProductResource
    //    extends ng.resource.IResource<> {
        
    //}


    productResource.$inject = ["$resource"];

    function productResource($resource : ng.I) {
        return $resource("api/products/:productId");
    }

    angular
        .module("app.common.services")
        .factory("productResources", productResource);
}