const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find(x => x.title === title)
    
    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    }else{
        console.log(chalk.red('Note title already taken!'))
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter(x => x.title !== title)
    if(newNotes.length === notes.length){
        console.log(chalk.bgRed('Note not found'))
    }else{
        saveNotes(newNotes)
        console.log(chalk.bgGreen('The note removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length != 0){
        console.log(chalk.bgBlue('--Your Notes--'))
        notes.forEach(x => {
            console.log(x.title + ' ' + x.body)
        });
    }
    else{
        console.log('No note found!')
    }
}


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(x => x.title === title)

    if(!note){
        console.log(chalk.red('The note not found!'))
    }else{
        console.log(note.title + ' ' + note.body)
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try{
        notes = fs.readFileSync('notes.json')
        return JSON.parse(notes)
    }catch(e){
        return []
    }
}

module.exports = { addNote, readNote, removeNote, listNotes}