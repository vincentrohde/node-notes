/* Requiring all 3rd party modules */

const fs = require('fs');
const yargs = require('yargs');

/* Create yargs process object for commands */
const argv = yargs.argv;
let command = argv._[0];

if(command === 'add') {
  
  if(argv.title && argv.body) {
    /* create a new note */
    let myNote = noteConstr.construct(argv.title, argv.body, new Date());
    
    let note = JSON.stringify(myNote);

    console.log(note);
  } else {
    /* Conditional check what is missing */
    console.log(argv.title ? '--body is missing' : '--title is missing');
  }

} else if(command === 'list') {
  console.log('list command');
} else if(command === 'read') {
  console.log('read command: ', argv.title);
} else if(command === 'remove') {
  console.log('remove command: ', argv.title);
} else {
  console.log('Command not found.');
}