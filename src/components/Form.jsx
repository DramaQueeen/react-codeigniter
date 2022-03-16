import React from 'react'
import {useState} from 'react'

const Form = ({notes, setNotes}) => {

	const initialNotes = {
		id: '', 
		title: '', 
		body: ''
	}
	const [note, setNote] = useState(initialNotes); //Guardaran los datos en initialNotes

	const addNote = (e) => {

		e.preventDefault();

		if(note.title.trim() === "" || note.body.trim() === ""){return}

			setNotes([
			...notes, //para obtener todas las notas
			{
					...note, //para obtener lo ya escrito
					id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1
				}
				])

		console.log(Math.max(...notes.map(note => note.id)) + 1); //Para que nos de el número mayor y ... para que solo devuelva numeros.

		// note.map(note => note.id);

		setNote(initialNotes);

	}

	return (
		<form onSubmit={addNote} >
			<label htmlFor="title">
				Título
				<input id="title" value={note.title} type="text" onChange={(e) => setNote({...note,title: e.target.value})} />
			</label>
			<br/>
			<label htmlFor="body">
				Cuerpo
				<input id="body" value={note.body} type="text" onChange={(e) => setNote({...note,body: e.target.value})} />
			</label>
			<br/>
			<button>Agregar</button>
		</form>
	);
}

export default Form;