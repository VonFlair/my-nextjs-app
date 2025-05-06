import PocketBase from "pocketbase"
import express from 'express'
import { get_stage_records, get_feature_records, update_stage_record} from "./db.js";

const app = express()
const port = 8080

app.use(express.json());

app.get("/", (req, res) => {
  res.send('Wassup Homekey!')
})

/**
 * GET /api/stages - Retrieves stages filtered by type
 * 
 * Query Parameters:
 *   - type: (required) Filter stages by type ("buyer" or "seller")
 * 
 * Example Usage:
 *   - GET /api/stages?type=buyer - Returns all buyer stages
 *   - GET /api/stages?type=seller - Returns all seller stages
 * 
 * Returns:
 *   - Array of stage objects with fields: id, title, description, isCompleted, 
 *     aiBenefit, duration, traditionalDuration
 *   - 500 status with error message on failure
 */
app.get("/api/stages", async (req, res) => {
  try {
    const type = req.query.type;
    let records = await get_stage_records(type)
    res.send(records)
  } catch (error) {
    console.error(`Error in GET /api/stages/`, error);
    res.status(500).json({ error: "Server error" });
  }
})

/**
 * GET /api/features - Retrieves features filtered by role
 * 
 * Query Parameters:
 *   - role: (required) Filter features by role ("buyer" or "seller")
 * 
 * Example Usage:
 *   - GET /api/features?role=buyer - Returns all buyer features
 *   - GET /api/features?role=seller - Returns all seller features
 * 
 * Returns:
 *   - Array of feature objects with fields: id, title, description, icon
 *   - 500 status with error message on failure
 */
app.get("/api/features", async (req, res) => {
  try {
    const role = req.query.role;
    let records = await get_feature_records(role)
    res.send(records)
  } catch (error) {
    console.error(`Error in GET /api/features/`, error);
    res.status(500).json({ error: "Server error" });
  }
})

/**
 * PATCH /api/stages/:id - Updates a specific stage's completion status
 * 
 * URL Parameters:
 *   - id: (required) The unique identifier of the stage to update
 * 
 * Request Body:
 *   - isCompleted: (required) Boolean value indicating completion status
 *     Can be boolean (true/false) or string ("true"/"false")
 * 
 * Example Usage:
 *   - PATCH /api/stages/352g0vu3ephe533
 *     Body: { "isCompleted": true }
 * 
 * Returns:
 *   - Success response with updated stage data on success
 *   - 400 status with error message if update fails
 *   - 500 status for server errors
 */
app.patch("/api/stages/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { isCompleted } = req.body;
    
    const completedValue = typeof isCompleted === "string"
      ? isCompleted.toLowerCase() === "true"
      : Boolean(isCompleted);
    
    const result = await update_stage_record(id, { isCompleted: completedValue });
    
    if (result.success) {
      res.json(result.success);
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error(`Error in PATCH /api/stages/${req.params.id}:`, error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Homekey api listening on port ${port}`)
})