import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
    value: {
        type: String,
        unique: true,
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
    }
});

const Word = mongoose.model('Word', wordSchema);

export default Word;

