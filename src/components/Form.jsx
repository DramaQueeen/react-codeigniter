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
		<div className="has-background-success-light p-3">
			<form onSubmit={addNote} >

				<div className="field">
					<label className="label" htmlFor="title">Título</label>
					<div className="control">
						<input className="input" id="title" value={note.title} type="text" onChange={(e) => setNote({...note,title: e.target.value})} />
					</div>
				</div>

				<div className="field">
					<label className="label" htmlFor="body">Cuerpo</label>
					<div className="control">
						<textarea className="textarea" id="body" value={note.body} type="text" onChange={(e) => setNote({...note,body: e.target.value})}> </textarea>
					</div>
				</div>
				<button class="button is-primary">Agregar</button>
			</form>
		</div>
	);
}

export default Form;