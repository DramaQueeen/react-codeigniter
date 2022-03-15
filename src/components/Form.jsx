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

		if(note.title === "" || note.body === ""){return}

			setNotes([
			...notes, //para obtener todas las notas
			{
					...note, //para obtener lo ya escrito
					id: Math.max(...notes.map(note => note.id)) + 1
				}
				])

		console.log(Math.max(...notes.map(note => note.id)) + 1); //Para que nos de el número mayor y ... para que solo devuelva numeros.

		// note.map(note => note.id);

	}

	return (
		<form onSubmit={addNote} >
			<label htmlFor="title">
				Título
				<input id="title" type="text" onChange={(e) => setNote({...note,title: e.target.value})} />
			</label>
			<br/>
			<label htmlFor="body">
				Cuerpo
				<input id="body" type="text" onChange={(e) => setNote({...note,body: e.target.value})} />
			</label>
			<br/>
			<button>Agregar</button>
		</form>
	);
}

export default Form;