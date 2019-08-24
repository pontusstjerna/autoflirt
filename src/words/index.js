import mongoose from 'mongoose';
import Word from './WordModel';
import { getRandomInt } from "../util";
import * as allWordsSE from './se';
import * as allWordsEN from './en';
import * as types from './types';

const connectDb = () => mongoose.connect(process.env.DATABASE_URL);

export { connectDb };

export const getWordSE = ({ type, serious, mean }) => getWord({ type, serious, mean, language: 'se' });
export const getWordEN = ({ type, serious, mean }) => getWord({ type, serious, mean, language: 'en' });

export const getWordCountSE = ({ type, serious, mean }) => Word.count({ type, serious, mean, language: 'se' });
export const getWordCountEN = ({ type, serious, mean }) => Word.count({ type, serious, mean, language: 'en' });

export const seedIfEmpty = () => {
    return Word.count().then(count => {
        if (count > 0) {
            console.log('There are ' + count + ' words in DB, wont seed.');
            return;
        } else {
            console.log('No words in DB. Will seed.');
        }

        return Promise.all(Object.keys(allWordsSE)
            .map(wordType => {
                return {type: types[wordType.toUpperCase()], words: allWordsSE[wordType]};
            })
            .map(({type, words}) =>
                Promise.all(words.serious.map(word => {
                    const dbUser = new Word({
                        value: word,
                        type: type,
                        mean: false,
                        serious: true,
                        language: 'se'
                    });
                    return dbUser.save();
                })).then(() => Promise.all(words.mean.map(word => {
                    const dbUser = new Word({
                        value: word,
                        type: type,
                        mean: true,
                        serious: true,
                        language: 'se'
                    });
                    return dbUser.save();
                }))).then(() => Promise.all(words.weird.map(word => {
                    const dbUser = new Word({
                        value: word,
                        type: type,
                        mean: false,
                        serious: false,
                        language: 'se'
                    });
                    return dbUser.save();
                })))
            )).then(() =>
            Promise.all(Object.keys(allWordsEN)
                .map(wordType => ({type: wordType, words: allWordsEN[wordType]}))
                .map(({type, words}) =>
                    Promise.all(words.map(word => {
                        const dbUser = new Word({
                            value: word,
                            type: type,
                            mean: false,
                            serious: true,
                            language: 'en'
                        });
                        return dbUser.save();
                    }))
                ))
        );
    });
};

const getWord = ({type, serious, mean, language}) => {
    if (!type) return null;
    let query = {
        type,
        language
    };

    if (serious) {
        query.serious = true;
    }

    if (!mean) {
        query.mean = false;
    }

    return Word.count(query).then(count => Word.findOne(query).skip(getRandomInt(count - 1)));
};
