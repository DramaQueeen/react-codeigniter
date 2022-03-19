import React from 'react'
import Note from './Note'

const Notes = ({notes, setNotes}) => {
	
	const deleteNote = (id, e) =>{
		e.preventDefault();
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
		<div className="columns is-multiline">
		{
			//Recorriendo el array con map
			notes.map(note => {
				return <Note key={note.id} updateNote = {updateNote} note={note} deleteNote={deleteNote}></Note>;
			})
		}
		</div>
	);
}

export default Notes;