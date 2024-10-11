
const express = require('express');
const NoteModel = require('../models/NotesModel');
const router = express.Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/', async (req, res) => {
    const data = req.body;
    if (!data.title || !data.description) {
        return res.status(400).send({ 
            message: "Note title and description cannot be empty" 
        });
    }
    let givenPriority;
    if(!["HIGH", "MEDIUM", "LOW"].includes(data.priority)){
        givenPriority = "MEDIUM";
    }else{
        givenPriority = data.priority;
    }
    const note = new NoteModel({
        title: data.title,
        description: data.description,
        priority: givenPriority
    });
    try {
        const newNote = await note.save();
        return res.status(201).json({
            message: "Note Created",
            note: newNote
        });
    } catch (err) {
        return res.status(500).json({ 
            message: "Error creating note", 
            error: err.message 
        });
    }
        
});

// //TODO - Retrieve all Notes
// //http://mongoosejs.com/docs/api.html#find_find
router.get('/', (req, res) => {
    // Validate request
    NoteModel.find().then((notes) => {
        res.send(notes)
    }).catch((err) => {
        res.status(500).send({message: err.message})
    });
    //TODO - Write your code here to returns all note
});

// //TODO - Retrieve a single Note with noteId
// //http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/:noteId', async (req, res) => {
    const noteId = req.params.noteId;
    try{
        const reqNote = await NoteModel.findById(noteId)
        if(!reqNote) return res.status(404).send({message: "Note Not Found"})

        return res.status(200).json(reqNote)
    }
    catch(err){
        res.status(500).send({message: err.message})
    }
});


// //TODO - Update a Note with noteId
// //http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/:noteId', async (req, res) => {
    // Validate request
    const noteId = req.params.noteId;
    const data = req.body;
    if (!data.title || !data.description) {
        return res.status(400).send({ 
            message: "Note title and description cannot be empty" 
        });
    }
    const givenPriority = ["HIGH", "MEDIUM", "LOW"].includes(data.priority) ? data.priority : "LOW";
    try {
        const updateNote = await NoteModel.findByIdAndUpdate(
            noteId,
            {
            title: data.title,
            description: data.description,
            priority: givenPriority,
            dateUpdated : Date.now()
        },
        {new: true}
    );

    if(!updateNote){
        return res.status(404).send({message: "Note Not Found"});
    }
    return res.status(200).json({
        message: "Note Updated",
        note: updateNote
    });    
    } catch (err) {
        return res.status(500).json({ 
            message: "Error Updating note", 
            error: err.message 
        });
    }
});

// //TODO - Delete a Note with noteId
// //http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/:noteId', async (req,res) => {
    const noteId = req.params.noteId;
    try{
        const note = await NoteModel.findByIdAndDelete(noteId);

        if(!note){
            return res.status(404).send({message: "Note Not found"})
        }
        return res.status(200).send({message: "Deleted Note Successfully"})
    }
    catch (err) {
        return res.status(500).json({ 
            message: "Error Deleting note", 
            error: err.message 
        })
    }
});
module.exports = router
