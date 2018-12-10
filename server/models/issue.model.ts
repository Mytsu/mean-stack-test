import * as mongoose from 'mongoose';

const IssueSchema = new mongoose.Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

const Issue = mongoose.model('Issue', IssueSchema);

export default Issue;


