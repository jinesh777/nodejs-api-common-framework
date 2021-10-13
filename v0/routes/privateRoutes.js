const privateRoutes = {
    'GET /vendororderapp/orderByDeliveryStatus': 'VendorOrderController.getOrders',
    'GET /vendororderapp/orderByVendorStatus': 'VendorOrderController.orderByVendorStatus',
    'POST /vendororderapp/acceptOrRejectOrder': 'VendorOrderController.acceptOrRejectOrder',
    'GET /vendororderapp/vendorProduct': 'VendorOrderController.vendorProductList',
    'GET /vendororderapp/dashboard': 'VendorOrderController.dashboard',
    'GET /vendororderapp/productByCategory': 'VendorOrderController.vendorProduct',
    'GET /vendororderapp/getCategory': 'VendorOrderController.getVendorSubCategory',
    'POST /vendororderapp/addProducts': 'VendorProductController.vendorAddProducts',
    'POST /vendororderapp/prodPriceChange': 'VendorProductController.vendorProductPriceChange',
    'GET /vendororderapp/getAllProductMeasurement': 'VendorProductController.getAllProductMeasurement',
    'POST /vendororderapp/updateStatus': 'VendorProductController.updateProducts',
    'GET /vendororderapp/allProductListByCategory': 'VendorOrderController.allProductList',
    'POST /vendororderapp/deliverOrder': 'VendorOrderController.deliverOrder',
    'GET /vendororderapp/getPaymentTransaction': 'PaymentTransactionController.paymentTransactionList',
    'GET /vendororderapp/qrCode/searchByOrder': 'VendorOrderController.getOrderByQRCode',
};
module.exports = privateRoutes;