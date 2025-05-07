import PocketBase from "pocketbase";

const pb = new PocketBase('http://127.0.0.1:8090');
(async () => {
  // Authenticate once on import
  await pb.collection('_superusers').authWithPassword(
    'madd_hacks@homekey.com',
    'Testing@12345'
  );
})().catch(console.error);

/**
 * Stages CRUD operations
 */
export const listStages = async (type) => {
  const opts = { sort: 'created' };
  if (type) opts.filter = `type = "${type}"`;
  opts.expand = 'tasks';
  return pb.collection('stages').getFullList(opts);
};

export const getStage = async (id) => {
  return pb.collection('stages').getOne(id, { expand: 'tasks' });
};

export const createStage = async (data) => {
  return pb.collection('stages').create(data);
};

export const updateStage = async (id, data) => {
  return pb.collection('stages').update(id, data);
};

export const deleteStage = async (id) => {
  return pb.collection('stages').delete(id);
};

/**
 * Tasks CRUD operations
 */
export const listTasks = async (stageId) => {
  const opts = { sort: 'created' };
  if (stageId) opts.filter = `stage = "${stageId}"`;
  return pb.collection('tasks').getFullList(opts);
};

export const getTask = async (id) => {
  return pb.collection('tasks').getOne(id);
};

export const createTask = async (data) => {
  return pb.collection('tasks').create(data);
};

export const updateTask = async (id, data) => {
  return pb.collection('tasks').update(id, data);
};

export const deleteTask = async (id) => {
  return pb.collection('tasks').delete(id);
};