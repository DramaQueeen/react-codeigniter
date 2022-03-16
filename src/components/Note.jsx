import React from 'react'

const Note = ({note, deleteNote}) => {
	return (
		<li style={{marginBottom: '.6em'}}>
			ID: {note.id} titulo: {note.title} Cuerpo: {note.body}
			//Otra manera de llamar una función directamente para pasar parámetros
			<button onClick={() => deleteNote(note.id)}>x</button> 
		</li>
	);
}

export default Note;