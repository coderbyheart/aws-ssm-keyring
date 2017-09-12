import program = require('commander');
import {yellow, red} from 'colors';
import {ssm, KeyId} from './config';

program
    .arguments('<id>')
    .action((id) => ssm
        .deleteParameter({
            Name: `/teamsecret/${KeyId}/${id}`,
        })
        .promise()
        .then(() => {
            console.log(yellow(`${id} deleted`));
        })
        .catch(err => {
            console.error(red(err));
        })
    );

program.parse(process.argv);
