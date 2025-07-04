const { getSkuDetailsByCMCode, getAllSkuDetails, updateIsActiveStatus } = require('../models/model.getSkuDetails');

/**
 * Controller to get SKU details filtered by CM code
 */
async function getSkuDetailsByCMCodeController(request, reply) {
  try {
    const { cm_code } = request.params;
    
    const skuDetails = await getSkuDetailsByCMCode(cm_code);
    
    reply.code(200).send({ 
      success: true, 
      count: skuDetails.length,
      cm_code: cm_code,
      data: skuDetails 
    });
  } catch (error) {
    request.log.error(error);
    reply.code(500).send({ 
      success: false, 
      message: 'Failed to fetch SKU details', 
      error: error.message 
    });
  }
}

/**
 * Controller to get all SKU details
 */
async function getAllSkuDetailsController(request, reply) {
  try {
    const skuDetails = await getAllSkuDetails();
    
    reply.code(200).send({ 
      success: true, 
      count: skuDetails.length,
      data: skuDetails 
    });
  } catch (error) {
    request.log.error(error);
    reply.code(500).send({ 
      success: false, 
      message: 'Failed to fetch SKU details', 
      error: error.message 
    });
  }
}

/**
 * Controller to update is_active status for a SKU detail by id
 */
async function updateIsActiveStatusController(request, reply) {
  try {
    const { id } = request.params;
    const { is_active } = request.body;
    if (typeof is_active !== 'boolean') {
      return reply.code(400).send({ success: false, message: 'is_active must be a boolean' });
    }
    const updated = await updateIsActiveStatus(id, is_active);
    if (!updated) {
      return reply.code(404).send({ success: false, message: 'SKU detail not found' });
    }
    reply.code(200).send({ success: true, data: updated });
  } catch (error) {
    request.log.error(error);
    reply.code(500).send({ success: false, message: 'Failed to update is_active status', error: error.message });
  }
}

module.exports = { 
  getSkuDetailsByCMCodeController, 
  getAllSkuDetailsController,
  updateIsActiveStatusController
}; 