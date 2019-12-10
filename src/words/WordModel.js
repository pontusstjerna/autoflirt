import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    mean: {
        type: Boolean
    },
    serious: {
        type: Boolean
    },
    language: {
        type: String
    }
});

const Word = mongoose.model('Word', wordSchema);

export default Word;

