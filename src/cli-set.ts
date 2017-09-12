import program = require('commander');
import {green, red} from 'colors';
import {ssm, KeyId} from './config';

program
    .arguments('<id> <secret>')
    .option('-u, --username <username>', 'username', '')
    .option('-c, --comment <comment>', 'comment', '')
    .action((id, secret, options) => ssm
        .putParameter({
            Name: `/teamsecret/${KeyId}/${id}`,
            Type: 'SecureString',
            Value: JSON.stringify({
                secret,
                username: options.username,
                comment: options.comment
            }),
            Description: 'Shared team secret',
            KeyId,
            Overwrite: true
        })
        .promise()
        .then(() => ssm.addTagsToResource({
            ResourceId: `/teamsecret/${KeyId}/${id}`,
            ResourceType: 'Parameter',
            Tags: [
                {
                    Key: 'teamsecret',
                    Value: '1'
                }
            ]
        }).promise())
        .then(() => {
            console.log(green(`Stored ${id}`));
        })
        .catch(err => {
            console.error(red(err));
        })
    );

program.parse(process.argv);
