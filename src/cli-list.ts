import {green, yellow} from 'colors';
import {ssm, KeyId} from './config';

ssm
    .getParametersByPath({
        Path: `/teamsecret/${KeyId}`,
    })
    .promise()
    .then(({Parameters}) => {
        console.log(`${yellow(Parameters.length)} secrets on record`);
        Parameters.map(({Name}) => {
            console.log(`- ${green(Name.replace(/^\/teamsecret\/[a-f0-9-]+\//, ''))}`);
        });
    });
