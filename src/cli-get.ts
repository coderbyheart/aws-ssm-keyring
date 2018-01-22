import program = require('commander');
import { green, red, blue, grey } from 'colors';
import { ssm, KeyId } from './config';
import { keyName } from './util';

program
    .arguments('<id>')
    .action((id) => ssm
        .getParameter({
            Name: keyName(KeyId, id),
            WithDecryption: true
        })
        .promise()
        .then(({Parameter}) => {
            if (!Parameter) {
                throw new Error(`Key "${id}" not found.`);
            }
            const {Value} = Parameter;
            const {secret, username, comment} = JSON.parse(Value || '');
            console.log(green(`${id}:`), blue(secret));
            if (username) {
                console.log(`Username: ${username}`);
            }
            if (comment) {
                console.log(grey(comment));
            }
        })
        .catch(err => {
            console.error(red(err));
        })
    );

program.parse(process.argv);
