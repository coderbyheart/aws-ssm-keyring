import program = require('commander');

program
    .command('set <id> <secret>', 'set the secret for the given id')
    .command('get <id>', 'show the secret for the given id')
    .command('delete <id>', 'delete the secret for the given id')
    .command('list', 'list all ids for this team keyring', {isDefault: true})
    .parse(process.argv);
