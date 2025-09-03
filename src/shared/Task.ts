import { Entity, Fields, Validators } from 'remult'

@Entity('tasks', {
    allowApiCrud: true,
})
export class Task {
    @Fields.id()
    id= ""

    @Fields.string({
        // validate: [Validators.required, Validators.minLength(3)],
    })
    title= ""
    
    @Fields.boolean()
    completed= false

    @Fields.createdAt()
    createdAt?: Date
}