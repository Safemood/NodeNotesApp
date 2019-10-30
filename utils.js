const fs = require('fs')
const chalk = require('chalk')
const listNotes = () => {
        const notes = loadNotes();
        notes.forEach(note =>  console.log(chalk.green.bold.inverse('Title : ' + note.title))  );
        return  'Your Note ...' ;
}
const addNotes =  (title,body) => {
       const notes = loadNotes()
       const duplicateNote = notes.find( (note) => note.title === title)
       if (!duplicateNote){
                notes.push({
                        title : title,
                        body : body
                })
                saveNotes(notes)
                console.log(chalk.green.bold.inverse('New Note Added!'))
       }else{
        console.log(chalk.red.bold.inverse('Note Title Taken!'))    
       }
      
}
const removeNote =  (title) => {

        const notes = loadNotes()
        const NotesToKeep = notes.filter( (note) => note.title !== title)
        if(notes.length > NotesToKeep.length){
                console.log(chalk.green.bold.inverse('Note Removed!'))
                saveNotes(NotesToKeep)
        }else{
                console.log(chalk.red.bold.inverse('no Note Found!'))
        }
     
       
      
       
 }
const saveNotes=  (notes) => {
        const dataJson = JSON.stringify(notes)
        fs.writeFileSync('data.json',dataJson)
}
const loadNotes =  () => {
       try {
          const dataBuffer = fs.readFileSync('data.json')   
           const dataJson =  dataBuffer.toString(); 
          return JSON.parse(dataJson)
       } catch (error) {
            return []   
       }
 }

module.exports = {
        listNotes : listNotes,
        addNotes  : addNotes,
        removeNote : removeNote
} ;