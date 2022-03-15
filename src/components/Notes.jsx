import React from 'react'
import Note from './Note'

const Notes = ({notes}) => {
	return (
		<ul>
		{
			//Recorriendo el array con map
			notes.map(note => {
				return <Note key={note.id} note={note}></Note>;
			})
		}
		</ul>
	);
}

export default Notes;