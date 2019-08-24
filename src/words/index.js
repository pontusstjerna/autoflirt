import mongoose from 'mongoose';
import Word from './WordModel';

const connectDb = () => mongoose.connect(process.env.DATABASE_URL);

export { connectDb };

export const getWord = ({type, serious, mean}) => {
    if (!type) return null;
    return Word.find({type, serious, mean});
};
