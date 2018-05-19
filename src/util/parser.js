import { createInterface } from 'readline';
import { createReadStream } from 'fs';

export default (type, isSerious) => {
    return new Promise((resolve, reject) => {

        const lineReader = createInterface({
            input: createReadStream('words/' + type + '.txt')
        });

        let lines = [];

        lineReader.on('line', line => lines.push(line));
        lineReader.on('close', () => {

            // If serious, resolve now and skip parsing the unserious words
            if (!isSerious) { // TODO: Change
                resolve(lines);
            } else {
                const lineReaderUnserious = createInterface({
                    input: createReadStream('words/' + type + '.txt')
                });
        
                let lines = [];
        
                lineReaderUnserious.on('line', line => lines.push(line));
                lineReaderUnserious.on('close', () => resolve(lines));
            }
        });
    });
}