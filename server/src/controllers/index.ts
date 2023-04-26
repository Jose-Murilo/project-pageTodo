import { Request, Response } from 'express';
import prisma from '../databases';
interface Task {
  id: number;
  titleTask: string;
  descriptionTask: string;
  created_at: Date;
  updated_at: Date;
  isCompleted: boolean;
}

const controllers = {
  async read(req: Request, res: Response) {
    try {
      const { id } = req.query;

      if (id) {
        const listTask: Task | null = await prisma.task.findUnique({ where: { id: Number(id) } });

        return listTask ? res.json(listTask) : res.json({ message: 'Task not found' });
      } else {
        const listTasks: Task[] = await prisma.task.findMany();
        return res.json(listTasks);
      }
    } catch (error: unknown) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const { titleTask, descriptionTask } = req.body;

      if (!titleTask) {
        return res.status(400).json({ error: 'Title is required' });
      }

      if (!descriptionTask) {
        return res.status(400).json({ error: 'Description is required' });
      }

      const TaskCreate = await prisma.task.create({
        data: { titleTask, descriptionTask: descriptionTask as string },
      });

      return res.status(201).json({ message: 'Task created successfully' });
    } catch (error: unknown) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { titleTask, descriptionTask, isCompleted } = req.body;

      if (!titleTask) return res.status(400).json({ error: 'titleTask is required' });
      if (!descriptionTask) return res.status(400).json({ error: 'descriptionTask is required' });

      const taskId = await prisma.task.findUnique({ where: { id: Number(id) } });
      if (!taskId) return res.status(400).json({ error: 'User Not Found!' });

      const taskUpdate = await prisma.task.update({
        where: { id: Number(id) },
        data: { titleTask, descriptionTask, isCompleted: Boolean(isCompleted) },
      });

      return res.json(taskUpdate);
    } catch (error: unknown) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const taskDelete = await prisma.task.delete({
        where: { id: Number(id) },
      });

      return res.json(taskDelete);
    } catch (error: unknown) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default controllers;