define({ "api": [
  {
    "type": "get",
    "url": "/vyp/vendororderapp/getAllProductMeasurement",
    "title": "getAllProductMapping",
    "name": "ProductMeasurmentMappingetAll",
    "version": "0.1.1",
    "group": "ProductMeasurmentMapping",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by_name",
            "description": "<p>WHich field to sort</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "var_sort_fld",
            "description": "<p>Which way to sort (DESC,ASC)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>which is for searching by productId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchByMeasurementName",
            "description": "<p>which is for searching by searchByMeasurementName</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorProductController.js",
    "groupTitle": "ProductMeasurmentMapping"
  },
  {
    "type": "post",
    "url": "/vyp/vendororderapp/deliverOrder",
    "title": "deliver the order(for self pick up orders)",
    "name": "vendordeliverOrder",
    "version": "0.1.1",
    "group": "Vendor_Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "order_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "otp",
            "description": ""
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "Vendor_Delivery"
  },
  {
    "type": "POST",
    "url": "/vyp/vendororderapp/addProducts",
    "title": "AddVendorProducts",
    "name": "AddVendorProducts",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "product_item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "uom",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "uom_value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "stockqty",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "STRING",
            "optional": false,
            "field": "qty_messure",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "mrp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "selling_price",
            "description": ""
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorProductController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "get",
    "url": "/vyp/vendororderapp/productByCategory",
    "title": "get all vendor product by subcategory",
    "name": "GetVendorProductBySubCategory",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page to display</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "sub_cat_id",
            "description": "<p>SubCategoryId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "searchByName",
            "description": "<p>Search by product name</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "get",
    "url": "/vyp/vendororderapp/getCategory",
    "title": "get all vendor subcategory",
    "name": "GetVendorSubCategory",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page to display</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "get",
    "url": "/vyp/vendororderapp/orderByDeliveryStatus",
    "title": "get order list based on the delivery status",
    "name": "OrderListByDeliveryStatus",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page to display</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "delivery_status",
            "description": "<p>{'DELIVERYACCEPT', 'OUTOFDELIVERY', 'DELIVERED', 'HOLD', 'CANCELLED'}</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "get",
    "url": "/vyp/vendororderapp/orderByVendorStatus",
    "title": "get order list based on the vendor status",
    "name": "OrderListByVendorStatus",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page to display</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "vendor_status",
            "description": "<p>{'ACCEPT','REJECT','HOLD'}</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "delivery_status",
            "description": "<p>{'DELIVERYACCEPT', 'OUTOFDELIVERY', 'DELIVERED', 'HOLD', 'CANCELLED'}</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "POST",
    "url": "/vyp/vendororderapp/prodPriceChange",
    "title": "UpdateProdPrice",
    "name": "UpdateProdPrice",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "product_item_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "uom",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "uom_value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "mrp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "selling_price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "is_active",
            "description": "<p>(1 or 0)</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "stockqty",
            "description": ""
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorProductController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "get",
    "url": "/vyp/vendororderapp/vendorProduct",
    "title": "get vendor product list",
    "name": "VendorProductList",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page to display</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "post",
    "url": "/vyp/vendororderapp/acceptOrRejectOrder",
    "title": "acceptOrRejectOrder",
    "name": "acceptOrRejectOrder",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order_id",
            "description": "<p>happinessorderid/customerorderid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_status",
            "description": "<p>ACCEPT/REJECT</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "get",
    "url": "/vyp/vendororderapp/dashboard",
    "title": "get the details of vendor dashboard",
    "name": "dashboard",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "post",
    "url": "/vyp/vendororderapp/updateStatus",
    "title": "Update Vendor Product stutus",
    "name": "updateVendorProductStatus",
    "version": "0.1.1",
    "group": "Vendor_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "vendor_product_id",
            "description": "<p>vendor Product id</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "is_active",
            "description": "<p>0 (inactive) or 1 (active)</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorProductController.js",
    "groupTitle": "Vendor_Order"
  },
  {
    "type": "get",
    "url": "/vyp/vendororderapp/getPaymentTransaction",
    "title": "get transaction list",
    "name": "PaymentTransactionList",
    "version": "0.1.1",
    "group": "Vendor_Payment_Transaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page to display</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay_status",
            "description": "<p>{'SUCCESS','FAILURE','PENDING'}</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/PaymentTransactionController.js",
    "groupTitle": "Vendor_Payment_Transaction"
  },
  {
    "type": "get",
    "url": "/vyp/vendororderapp/allproductsByCategory",
    "title": "getall product by subcategory(including)",
    "name": "GetAllProductBySubCategory",
    "version": "0.1.1",
    "group": "ViewProductList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "page",
            "description": "<p>page number</p>"
          },
          {
            "group": "Parameter",
            "type": "INTEGER",
            "optional": false,
            "field": "limit",
            "description": "<p>records per page to display</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "sub_cat_id",
            "description": "<p>SubCategoryId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "searchByName",
            "description": "<p>Search by product name</p>"
          }
        ]
      }
    },
    "filename": "v0/controllers/VendorOrderController.js",
    "groupTitle": "ViewProductList"
  }
] });
