import React from 'react'
import {useState} from 'react'

const Note = ({note, deleteNote}) => {

	const [modeEdit, setModeEdit] = useState(false);
	const [item, setItem] = useState(note);

	const toggle = () => {
		setModeEdit(!modeEdit);
		setItem(note);
	}

	return (
		<li style={{marginBottom: '.6em'}}>
			<div>ID: {note.id}</div>
			{
				modeEdit ? 

				<label>
					Titulo: 
					<input type="text" value={item.title} onChange={(e) => setItem({...item, title: e.target.value})}/>
				</label>
				: <div>titulo: {note.title}</div>
			}
			{
				modeEdit ? 

				<label>
					Cuerpo: 
					<input type="text" value={item.body} onChange={(e) => setItem({...item, body: e.target.value})}/>
				</label>
				: <div>Cuerpo: {note.body}</div>
			}
			
			{
				modeEdit &&
				<button>Guardar</button>
			}
			
			<button onClick={() => toggle()}>{modeEdit ? 'Cancelar' : 'Editar'}</button> 

			{
				!modeEdit &&
				<button onClick={() => deleteNote(note.id)}>x</button> 
			}

			
		</li>
	);
}

export default Note;