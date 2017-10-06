import crypto = require('crypto');

const hashId = (str: string): string => crypto.createHash('sha256').update(str, 'utf8').digest('hex');

export const keyName = (keyId: string, id: string): string => `/teamsecret/${keyId}/${hashId(id)}`;
