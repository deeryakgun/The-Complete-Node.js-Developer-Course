const notes = require('./notes.js')
const { describe } = require('node:test')
const { type } = require('os')
const {title, argv } = require('process')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title:{
            describe: 'title of note',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove the note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler(){ 
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read the note',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()