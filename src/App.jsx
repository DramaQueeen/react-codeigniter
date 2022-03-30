import React from 'react'
import {useState, useEffect} from 'react'
import Form from './components/Form'
import Notes from './components/Notes'
import Axios from 'axios'

function Dashboard(){

	useEffect(() => {

		Axios.get("http://notes-api.test/api/notes")
			.then((payload) => {
			setNotes(payload.data);
		}).catch((error) => {
			console.log(error);
		});

	}, []);

	const [notes, setNotes] = useState([]);


	// const changeState = () => {
		
	// 	const reg = {id: 6, title: 'nota6', body: 'lorem ipsum'};
		
	// 	setNotes(notes.concat(reg)); //Para agregar el registro al que ya se tenía. Y set para guardarlo.
	// }

	return (
	
		<div className="container">
			
			<h1 className="title has-text-centered mt-5">Listado de notas</h1>

			<Notes notes={notes} setNotes={setNotes}></Notes>
			<Form notes={notes} setNotes={setNotes}></Form>
		</div>

	)
}

export default Dashboard;