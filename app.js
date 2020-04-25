const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler  (argv){
       notes.addNotes(argv.title,argv.body)
    }
})


// Create remove command
yargs.command({
    command: 'Remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },

    handler  (argv){
        notes.removeNote(argv.title);
    }
})


// Create print command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler  (){
        notes.listNotes();
    }
})


// Create remove command
yargs.command({
    command: 'Read',
    describe: 'Read a  note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title);
    }
})


//console.log(yargs.argv);
yargs.parse();