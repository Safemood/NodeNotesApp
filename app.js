const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./utils')
//console.log(chalk.green.bold.inverse('Success!'));

yargs.command({
    command : 'add',
    describe : 'Add a new Note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },

        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)

    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove a Note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
 
    },
    handler(argv){
        notes.removeNote(argv.title)

    }
})

yargs.command({
    command : 'read',
    describe : 'Read a Note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
    },
    handler(argv){
       notes.readNote(argv.title)
    }
})
yargs.command({
    command : 'list',
    describe : 'Listing Notes',
    handler(){
    notes.listNotes()
    }
})
yargs.parse()