import React from 'react'
import Note from './Note'

const Notes = ({notes, setNotes}) => {
	
	const deleteNote = (id) =>{

		const newNotes = notes.filter(note => id !== note.id);
		console.log(newNotes);

		setNotes(newNotes);
	}

	return (
		<ul>
		{
			//Recorriendo el array con map
			notes.map(note => {
				return <Note key={note.id} note={note} deleteNote={deleteNote}></Note>;
			})
		}
		</ul>
	);
}

export default Notes;