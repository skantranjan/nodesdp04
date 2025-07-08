const { insertSkuAuditLogController } = require('../controllers/controller.skuAuditLog');

async function skuAuditLogRoutes(fastify, options) {
  // Insert a new audit log record
  fastify.post('/sku-auditlog/add', insertSkuAuditLogController);
}

module.exports = skuAuditLogRoutes; 