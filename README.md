# aws-ssm-keyring

Manage Team Secrets using AWS SSM

This is a simple for managing secrets within a team.

Secrets are stored as Amazon EC2 Systems Manager parameters, 
and encrypted using a Amazon IAM Encryption key.

That way you can easily assign who has access the the secrets.

## Setup

Create a new Encryption Key in AWS IAM. Assign users that should be
allowed to access the data as admins or users of that key.

Copy the `.env.dist` file to `.env` and put the key ID in there.

    npm i
    make dist

## Usage

```
% node dist/cli.js --help    

  Usage: cli [options] [command]


  Options:

    -h, --help  output usage information


  Commands:

    set <id> <secret>  set the secret for the given id
    get <id>           show the secret for the given id
    delete <id>        delete the secret for the given id
    list               list all ids for this team keyring
    help [cmd]         display help for [cmd]
```
