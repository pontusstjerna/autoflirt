import mongoose from 'mongoose';
import Word from './WordModel';
import { getRandomInt } from "../util";

const connectDb = () => mongoose.connect(process.env.DATABASE_URL);

export { connectDb };

export const getWord = ({type, serious, mean}) => {
    if (!type) return null;
    const query = { type, serious, mean };
    const count = Word.count(query);
    return Word.find(query).limit(1).skip(getRandomInt(count - 1));
};
