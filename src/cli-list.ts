import { green, yellow } from 'colors';
import { ssm, KeyId } from './config';

ssm
    .getParametersByPath({
        Path: `/teamsecret/${KeyId}`,
        WithDecryption: true
    })
    .promise()
    .then(({Parameters}) => {
        console.log(`${yellow(Parameters.length)} secrets on record`);
        Parameters.map(({Name, Value}) => {
            console.log(`- ${green(JSON.parse(Value).id)}`);
        });
    });
