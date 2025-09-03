import { remultApi } from 'remult/remult-express'
import { Task } from '../shared/Task'
import { TasksController } from '../shared/TasksController'

export const api = remultApi({
    entities: [Task],
    admin: true,
    controllers: [TasksController],
})