import React from 'react'
import {useState} from 'react'
import Form from './components/Form'
import Notes from './components/Notes'

function Dashboard(){

	const [notes, setNotes] = useState([
		{id: 1, title: 'nota1', body: 'lorem ipsum'},
		{id: 2, title: 'nota2', body: 'lorem ipsum'},
		{id: 3, title: 'nota3', body: 'lorem ipsum'},
		{id: 4, title: 'nota4', body: 'lorem ipsum'},
		{id: 5, title: 'nota5', body: 'lorem ipsum'}
	]);




	// const changeState = () => {
		
	// 	const reg = {id: 6, title: 'nota6', body: 'lorem ipsum'};
		
	// 	setNotes(notes.concat(reg)); //Para agregar el registro al que ya se tenía. Y set para guardarlo.
	// }

	return (
	
		<div>
			
			<h1>Listado de notas</h1>

			<Notes notes={notes} setNotes={setNotes}></Notes>
			<Form notes={notes} setNotes={setNotes}></Form>
		</div>

	)
}

export default Dashboard;