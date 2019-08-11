const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        req: "myPerson"
    },
    textone: {
        type: String,
        required: true
    },
    texttwo: {
        type: String,
        required: true
    },
    nmae: {
        type: String
    },
    upvotes: [{
        user: {
            type: Schema.Types.ObjectId,
            req: "myPerson"
        },
    }],
    answers: [{

        user: {
            type: Schema.Types.ObjectId,
            req: "myPerson"
        },
        text: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }

    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Question = mongoose.model('myQuestion', QuestionSchema)