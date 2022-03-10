import React from "react"

function Dashboard(){

	const notes = [
		{id: 1, title: 'nota1', body: 'lorem ipsum'},
		{id: 2, title: 'nota2', body: 'lorem ipsum'},
		{id: 3, title: 'nota3', body: 'lorem ipsum'},
		{id: 4, title: 'nota4', body: 'lorem ipsum'},
		{id: 5, title: 'nota5', body: 'lorem ipsum'}
	];

	return (
	
		<div>
			
			<h1>Listado de notas</h1>

			<ul>
			{
				//Recorriendo el array con map
				notes.map(note => {
					return <li>ID: {note.id} titulo: {note.title} Cuerpo: {note.body}</li>;
				})
			}
			</ul>
			
		</div>

	)
}

export default Dashboard;