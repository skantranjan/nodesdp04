const { getSkuDetailsByCMCodeController, getAllSkuDetailsController, updateIsActiveStatusController } = require('../controllers/controller.getSkuDetails');

async function skuDetailsRoutes(fastify, options) {
  // Get all SKU details
  fastify.get('/sku-details', getAllSkuDetailsController);
  
  // Get SKU details filtered by CM code
  fastify.get('/sku-details/:cm_code', getSkuDetailsByCMCodeController);

  // Update is_active status by id
  fastify.patch('/sku-details/:id/is-active', updateIsActiveStatusController);
}

module.exports = skuDetailsRoutes; 