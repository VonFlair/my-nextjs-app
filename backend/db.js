
import PocketBase from "pocketbase"

const pb = new PocketBase('http://127.0.0.1:8090');
const authData = await pb.collection("users").authWithPassword(
  'madd_hacks_user@homekey.com',
  'userTesting@1234'
);

console.log(authData) 


/**
 * Retrieves all stages with the specified type
 * 
 * @param {string} stage_type - The type of stages to retrieve ("buyer" or "seller")
 * @returns {Array|Object} - Array of stage objects on success, error object on failure
 * 
 * Example Usage:
 *   const buyerStages = await get_stage_records("buyer");
 *   
 * Each stage contains: id, title, description, isCompleted, aiBenefit, 
 * duration, and traditionalDuration fields
 */
export async function get_stage_records(stage_type) {
  try {
    const res = await pb.collection("stages").getFullList({
      filter: `type = "${stage_type}"`,
      fields: 'id,title,description,isCompleted,aiBenefit,duration,traditionalDuration'
    });
    return res;
  } catch (error) {
    console.error(`Error fetching stages`, error);
    return { success: false, error: error.message };
  }
}

/**
 * Retrieves all features with the specified type
 * 
 * @param {string} feature_type - The type of features to retrieve ("buyer" or "seller")
 * @returns {Array|Object} - Array of feature objects on success, error object on failure
 * 
 * Example Usage:
 *   const sellerFeatures = await get_feature_records("seller");
 *   
 * Each feature contains: id, title, description, and icon fields
 */
export async function get_feature_records(feature_type) {
  try {
    const res = await pb.collection("features").getFullList({
      filter: `type = "${feature_type}"`,
      fields: 'id, title, description, icon'
    });
    return res;
  } catch (error) {
    console.error(`Error fetching features`, error);
    return { success: false, error: error.message };
  }
}

/**
 * Updates a specific stage record
 * 
 * @param {string} id - The unique identifier of the stage to update
 * @param {Object} stageData - The data to update (typically { isCompleted: boolean })
 * @returns {Object} - Object with success flag and data or error message
 * 
 * Example Usage:
 *   const result = await update_stage_record("9p8w7jz52llv4ay", { isCompleted: true });
 *   if (result.success) {
 *     console.log("Stage updated:", result.data);
 *   }
 */
export async function update_stage_record(id, stageData) {
  try {
    const res = await pb.collection("stages").update(id, stageData);
    return { success: true, data: res };
  } catch (error) {
    console.error(`Error updating stage ${id}:`, error);
    return { success: false, error: error.message };
  }
}


