import React from "react"
import {useState} from "react"

function Dashboard(){

	const initialNotes = {
		id: '', 
		title: '', 
		body: ''
	}
	const [note, setNote] = useState(initialNotes); //Guardaran los datos en initialNotes

	const [notes, setNotes] = useState([
		{id: 1, title: 'nota1', body: 'lorem ipsum'},
		{id: 2, title: 'nota2', body: 'lorem ipsum'},
		{id: 3, title: 'nota3', body: 'lorem ipsum'},
		{id: 4, title: 'nota4', body: 'lorem ipsum'},
		{id: 5, title: 'nota5', body: 'lorem ipsum'}
	]);


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

	// const changeState = () => {
		
	// 	const reg = {id: 6, title: 'nota6', body: 'lorem ipsum'};
		
	// 	setNotes(notes.concat(reg)); //Para agregar el registro al que ya se tenía. Y set para guardarlo.
	// }

	return (
	
		<div>
			
			<h1>Listado de notas</h1>

			<ul>
			{
				//Recorriendo el array con map
				notes.map(note => {
					return <li key={note.id}>ID: {note.id} titulo: {note.title} Cuerpo: {note.body}</li>;
				})
			}
			</ul>

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
		</div>

	)
}

export default Dashboard;