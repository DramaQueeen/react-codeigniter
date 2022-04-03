import React from 'react'
import {useState} from 'react'
import Note from './Note'
import Axios from 'axios'

const Notes = ({notes, setNotes}) => {

	const [error, setError] = useState({
		'body' : '',
		'title' : ''
	});
	
	const deleteNote = (id, e) =>{
		e.preventDefault();
		
		Axios.delete(`http://notes-api.test/api/notes/${id}`)
			.then((payload) => {
				
				alert(payload.data.message);
				setNotes(notes.filter(note => id !== note.id));

		}).catch((error) => {
			alert(error.response);
		});

		
	}

	const updateNote = (newNote) => {

		let response = Axios.put(`http://notes-api.test/api/notes/${newNote.id}`, newNote)
			.then((payload) => {

				let {id} = payload.data.data;

				setNotes(
					notes.map(note => note.id === id ? payload.data.data : note)
				);	

				return true;

		}).catch((error) => {
			setError(error.response.data.messages);
			return false;
		});


		return response;

	}

	return (

		notes.length > 0 ?
			<div className="columns is-multiline">
			{
				//Recorriendo el array con map
				notes.map(note => {
					return <Note setError={setError} error={error} key={note.id} updateNote = {updateNote} note={note} deleteNote={deleteNote}></Note>;
				})
			}
			</div>
		: <p className="has-text-centered subtitle">No existen notas.</p>
	);
}

export default Notes;