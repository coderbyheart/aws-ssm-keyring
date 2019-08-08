import program = require('commander');
import { yellow, red } from 'colors';
import { ssm, KeyId } from './config';
import { keyName } from './util';

program
    .arguments('<id>')
    .action((id) => ssm
        .deleteParameter({
            Name: keyName(KeyId, id),
        })
        .promise()
        .then(() => {
            console.log(yellow(`${id} deleted`));
        })
        .catch(err => {
            console.error(red(err));
            process.exit(1);
        }),
    );

program.parse(process.argv);
