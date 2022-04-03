import React from 'react'
import {useState} from 'react'

const Note = ({note, deleteNote, updateNote, setError, error}) => {

	const [modeEdit, setModeEdit] = useState(false);
	const [item, setItem] = useState(note);

	const toggle = (e) => {
		e.preventDefault();
		setModeEdit(!modeEdit);
		setItem(note);
	}

	const edit = (e) => {
		e.preventDefault();

		updateNote(item);

		setModeEdit(false);
		
	}

	return (
		<div className="column is-one-quarter">
			<div className="card">
				<header className="card-header">
					<p className="card-header-title">
						ID: {note.id}
					</p>
				</header>
				<div className="card-content">
						
						{
							modeEdit ? 

							<div className="field">
								<label className="label" htmlFor="title">Título</label>
								<div className="control">
									<input className="input" type="text" value={item.title} onChange={(e) => setItem({...item, title: e.target.value})} />
								</div>
								<span class="help is-danger">{error.title}</span>
							</div>

							: <div>titulo: {note.title}</div>
						}
						{
							modeEdit ? 

							<div className="field">
								<label className="label" htmlFor="body">Cuerpo</label>
								<div className="control">
									<textarea className="textarea" value={item.body} onChange={(e) => setItem({...item, body: e.target.value})}></textarea>
								</div>
								<span class="help is-danger">{error.body}</span>
							</div>

							: <div>Cuerpo: {note.body}</div>
						}
						
				</div>
				<footer className="card-footer">
					<a href="{'/'}" className="card-footer-item" onClick={(e) => toggle(e)}>{modeEdit ? 'Cancelar' : 'Editar'}</a>
					{
						modeEdit ?
						<a href="{'/'}" className="card-footer-item" onClick={(e) => edit(e)}>Guardar</a>
						:
						<a href="{'/'}" className="card-footer-item" onClick={(e) => deleteNote(note.id, e)}>Eliminar</a> 
					}
					
				</footer>
			</div>
		</div>
	);
}

export default Note;