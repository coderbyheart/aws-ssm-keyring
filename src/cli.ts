import program = require('commander');

program
    .command('set', 'set the secret for the given id')
    .command('get', 'show the secret for the given id')
    .command('delete', 'delete the secret for the given id')
    .command('list', 'list all ids for this team keyring', {isDefault: true})
    .parse(process.argv);
