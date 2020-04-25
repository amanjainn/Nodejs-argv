const fs =require ('fs')
const chalk = require('chalk')

// Add Note

const addNote =  (title,body)=>{
    const notes= loadNotes()
    // const duplicateNotes = notes.filter((note)=>{
    //         return note.title === title ;
    // })
    const duplicateNote= notes.find((note)=>note.title===title)

    if(!duplicateNote){
    notes.push({
        title:title,
        body: body
    })
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
}else{
    console.log(chalk.red.inverse('Note title already exist'));
}}


// Remove note

const removeNote = (title)=>{
     //console.log(`You requested to delete ${title}`)
    const notes=loadNotes();

     const duplicateNotes=notes.filter((note)=>note.title!==title);
        saveNotes(duplicateNotes);
        if(notes.length === duplicateNotes.length)
        console.log(chalk.red.inverse("Your note doesn't exist"));
        else{
            console.log(chalk.green.inverse("Your note has been removed"));
        }

}

// List note

const listNotes = ()=>{
    const notes = loadNotes();
    if(notes.length>0){
        console.log(chalk.red.inverse('Title'));
        notes.forEach(element => {
            console.log(`${element.title}`);
        });
    }else{
        console.log(chalk.red.inverse('Your list is empty'));
    }
}


// Read note 

const readNote =(title)=>{
    const notes = loadNotes();
    let found = false;
    notes.forEach((element)=>{
        if(element.title===title){
            console.log(chalk.red.inverse(title));
            console.log(chalk.green(element.body));
            found=true;
          }
          
    })
    if(!found)
    console.log(chalk.red.inverse("Your note does not exist"));
}


const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    }catch(e){
        return [];
    }
}
module.exports ={
    addNotes: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}