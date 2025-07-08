const { getSkuDetailsByCMCodeController, getAllSkuDetailsController, updateIsActiveStatusController, getActiveYearsController, getAllSkuDescriptionsController, insertSkuDetailController, updateSkuDetailBySkuCodeController } = require('../controllers/controller.getSkuDetails');

async function skuDetailsRoutes(fastify, options) {
  // Get all SKU details
  fastify.get('/sku-details', getAllSkuDetailsController);
  
  // Get SKU details filtered by CM code
  fastify.get('/sku-details/:cm_code', getSkuDetailsByCMCodeController);

  // Update is_active status by id
  fastify.patch('/sku-details/:id/is-active', updateIsActiveStatusController);

  // Get unique active years (period)
  fastify.get('/sku-details-active-years', getActiveYearsController);

  // Get all sku_description values
  fastify.get('/sku-descriptions', getAllSkuDescriptionsController);

  // Insert a new SKU detail
  fastify.post('/sku-details/add', insertSkuDetailController);

  // Update a SKU detail by sku_code
  fastify.put('/sku-details/update/:sku_code', updateSkuDetailBySkuCodeController);
}

module.exports = skuDetailsRoutes; 