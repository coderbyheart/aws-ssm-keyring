import { green, red, yellow } from 'colors';
import { ssm, KeyId } from './config';

ssm
    .getParametersByPath({
        Path: `/teamsecret/${KeyId}`,
        WithDecryption: true,
    })
    .promise()
    .then(({Parameters}) => {
        if (!Parameters) {
            throw new Error(`Keys not found in "${KeyId}"!`);
        }
        const numKeys = (Parameters || []).length;
        console.log(`${yellow('' + numKeys)} secrets on record`);
        Parameters.map(({Name, Value}) => {
            console.log(`- ${green(JSON.parse(Value || '').id)}`);
        });
    })
    .catch(err => {
        console.error(red(err));
        process.exit(1);
    });
