import {red} from 'colors';
import {SSM} from 'aws-sdk';
import dotenv = require('dotenv');

dotenv.config();

export const KeyId = process.env.AWS_KMS_KEY;
if (!KeyId) {
    console.error(red('AWS_KMS_KEY not set!'));
    process.exit(1);
}

export const ssm = new SSM({
    region: process.env.AWS_REGION || 'us-east-1'
});
