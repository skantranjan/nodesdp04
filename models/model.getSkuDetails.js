const pool = require('../config/db.config');

/**
 * Get SKU details filtered by CM code
 * @param {string} cmCode - The CM code to filter by
 * @returns {Promise<Array>} Array of SKU details
 */
async function getSkuDetailsByCMCode(cmCode) {
  const query = `
    SELECT id, sku_code, sku_description, cm_code, cm_description, 
           sku_reference, is_active, created_by, created_date
    FROM public.sdp_skudetails 
    WHERE cm_code = $1
    ORDER BY sku_code;
  `;
  
  const result = await pool.query(query, [cmCode]);
  return result.rows;
}

/**
 * Get all SKU details
 * @returns {Promise<Array>} Array of all SKU details
 */
async function getAllSkuDetails() {
  const query = `
    SELECT id, sku_code, sku_description, cm_code, cm_description, 
           sku_reference, is_active, created_by, created_date
    FROM public.sdp_skudetails 
    ORDER BY cm_code, sku_code;
  `;
  
  const result = await pool.query(query);
  return result.rows;
}

/**
 * Update is_active status for a SKU detail by id
 * @param {number} id - The SKU detail id
 * @param {boolean} isActive - The new is_active status
 * @returns {Promise<Object>} The updated record
 */
async function updateIsActiveStatus(id, isActive) {
  const query = `
    UPDATE public.sdp_skudetails
    SET is_active = $1
    WHERE id = $2
    RETURNING id, sku_code, sku_description, cm_code, cm_description, sku_reference, is_active, created_by, created_date;
  `;
  const result = await pool.query(query, [isActive, id]);
  return result.rows[0];
}

module.exports = { 
  getSkuDetailsByCMCode, 
  getAllSkuDetails,
  updateIsActiveStatus
}; 