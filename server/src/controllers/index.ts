import { Request, Response  } from 'express'
import prisma from '../databases'

const controllers = {
    async read(req: Request, res:Response) {
        try {
            const { id } = req.query

            if (id) {
                const listTask = await prisma.task.findUnique({where: {id: Number(id)}})
                
                return listTask ? res.json(listTask) : res.json('User NotFound!')
            } else {
                const listTasks = await prisma.task.findMany()
                return res.json(listTasks)
            }
        } catch (error) {
          console.log(error);  
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
        
            const TaskCreate = await prisma.task.create(
              { data: { titleTask, descriptionTask: descriptionTask as string } }
            );
        
            return res.status(201).json({ message: 'Task created successfully' });
          } catch (error) {
            return res.json(error);
          }
        },

        async update(req: Request, res: Response) {
            try {
                const { id } = req.params
                const { titleTask, descriptionTask } = req.body;
    
                if (!titleTask) return res.status(400).json('titleTask required')
                if (!descriptionTask) return res.status(400).json('descriptionTask required')
    
                const taskId = await prisma.task.findUnique({where: {id: Number(id)}})
                if (!taskId) return res.status(400).json('User Not Found!')
    
                const taskUpdate = await prisma.task.update({
                    where: {id: Number(id)},
                    data: {titleTask, descriptionTask}
                });
                res.json(taskUpdate);
            } catch (error) {
              console.log(error);  
            }
        },

        async delete(req: Request, res: Response) {
            try {
                const { id } = req.params;
    
                const task = await prisma.task.findUnique({where: {id: Number(id)}});
                if (!task) return res.status(400).json('User Not Found!');
    
                const taskDelete = await prisma.task.delete({
                    where: {id: Number(id)}
                });
                return res.json(taskDelete);
            } catch (error) {
              console.log(error);  
            }
        },
    }

export default controllers