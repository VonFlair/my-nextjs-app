// File: app.js
import express from 'express';
import cors from 'cors';

import {
  listStages,
  getStage,
  createStage,
  updateStage,
  deleteStage,
  listTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} from './db.js';

const app = express();
const port = 8080;

// CORS + JSON body parsing
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

/** Stages CRUD **/

// GET /api/stages?type=buyer|seller
app.get('/api/stages', async (req, res) => {
  try {
    const stages = await listStages(req.query.type);
    res.json(stages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/stages/:id
app.get('/api/stages/:id', async (req, res) => {
  try {
    const stage = await getStage(req.params.id);
    res.json(stage);
  } catch {
    res.status(404).json({ error: 'Stage not found' });
  }
});

// POST /api/stages
app.post('/api/stages', async (req, res) => {
  try {
    const newStage = await createStage(req.body);
    res.status(201).json(newStage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH /api/stages/:id
app.patch('/api/stages/:id', async (req, res) => {
  try {
    const updated = await updateStage(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/stages/:id
app.delete('/api/stages/:id', async (req, res) => {
  try {
    await deleteStage(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/** Tasks CRUD **/

// GET /api/tasks?stageId=<id>
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await listTasks(req.query.stageId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tasks/:id
app.get('/api/tasks/:id', async (req, res) => {
  try {
    const task = await getTask(req.params.id);
    res.json(task);
  } catch {
    res.status(404).json({ error: 'Task not found' });
  }
});

// POST /api/tasks
app.post('/api/tasks', async (req, res) => {
  try {
    const newTask = await createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH /api/tasks/:id
app.patch('/api/tasks/:id', async (req, res) => {
  try {
    const updated = await updateTask(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/tasks/:id
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await deleteTask(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
