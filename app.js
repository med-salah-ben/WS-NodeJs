console.log("starting app.js")

const fs = require('fs');

const yargs = require("yargs")

const notes = require('./notes')

// console.log("process", process.arch);
// console.log("yargs",yargs.argv);

const title = yargs.argv.title;
const body = yargs.argv.body;
var command = yargs.argv._[0];

if(command==="add"){
    console.log("adding note")
    notes.addingNote(title,body)
}else if(command==="remove"){
    console.log("removing note");
    notes.removeNote(title)
}else if(command === "read"){
    console.log("reading note");
    notes.readingNotes(title)
}else if(command==="list"){
    console.log("all list")
    notes.getAll()
}else{
    console.log("Unkown command")
}



// console.log(title)
// console.log(body)





// console.log(notes.add(5,8));
// console.log(notes.sub(5,5));