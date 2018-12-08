import { Schema, Document, Model, model} from "mongoose"

export interface IssueModel extends Document {
    title?: String,
    responsible?: String,
    description?: String,
    severity?: String,
    status?: {
        type?: String,
        default?: 'Open'
    }
}

export var IssueSchema: Schema = new Schema({
    createdAt: Date,
    title: String,
    responsible: String,
    description: String,
    severity: String,
    status: {
        type: String,
        default: 'Open'
    }
})

IssueSchema.pre("save", (next): void => {
    let now = Date()
    if (!this.createdAt) 
        this.createdAt = now
    next()
})

export const Issue: Model<IssueModel> = model<IssueModel>("Issue", IssueSchema)
