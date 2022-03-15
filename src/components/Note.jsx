import React from 'react'

const Note = ({note}) => {
	return (
		<li>ID: {note.id} titulo: {note.title} Cuerpo: {note.body}</li>
	);
}

export default Note;