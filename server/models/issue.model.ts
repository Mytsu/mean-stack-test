import * as mongoose from 'mongoose';

let Issue = new mongoose.Schema({
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

export default mongoose.model('Issue', Issue);


