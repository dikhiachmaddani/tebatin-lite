import { z } from "zod";

export const createTaskManagementSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    task: z.string().min(1, 'Task is required'),
    is_done: z.boolean(),
});

export type TCreateTaskManagement = z.infer<typeof createTaskManagementSchema>;