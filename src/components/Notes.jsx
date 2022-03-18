import React from 'react'
import Note from './Note'

const Notes = ({notes, setNotes}) => {
	
	const deleteNote = (id) =>{

		const newNotes = notes.filter(note => id !== note.id);
		console.log(newNotes);

		setNotes(newNotes);
	}

	const updateNote = (newNote) => {

		setNotes(
			notes.map(note => note.id === newNote.id ? newNote : note)
		);
		console.log(newNote);

	}

	return (
		<ul>
		{
			//Recorriendo el array con map
			notes.map(note => {
				return <Note key={note.id} updateNote = {updateNote} note={note} deleteNote={deleteNote}></Note>;
			})
		}
		</ul>
	);
}

export default Notes;