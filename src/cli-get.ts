import program = require('commander');
import {green, red, blue, grey} from 'colors';
import {ssm, KeyId} from './config';

program
    .arguments('<id>')
    .action((id) => ssm
        .getParameter({
            Name: `/teamsecret/${KeyId}/${id}`,
            WithDecryption: true
        })
        .promise()
        .then(({Parameter: {Value}}) => {
            const {secret, username, comment} = JSON.parse(Value);
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
