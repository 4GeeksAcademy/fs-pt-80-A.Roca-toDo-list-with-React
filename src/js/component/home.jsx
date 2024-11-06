import { useState } from "react";
import React from "react";

const Home = () => {
	const [textoDeEntrada, setTextoDeEntrada] = useState("");
	const [tareas, setTareas] = useState([]);

	const controlTarea = (e) => {
		setTextoDeEntrada(e.target.value)
	}

	const controlInputTexto = (e) => {
		e.preventDefault();
		if (textoDeEntrada.trim() === "") {
			return;
		}


		const nuevaTarea = { label: textoDeEntrada, id: Date.now() };
		setTareas([...tareas, nuevaTarea]);
		setTextoDeEntrada("");

	};

	const eliminarTarea = (indice) => {
		const eliminar = tareas.filter((_, i) => i !== indice);
		setTareas(eliminar);
	}



	return (
		<div className="container">
			<h1>To Do List</h1>
			<form onSubmit={controlInputTexto} className="formulario">
				<input
					onChange={controlTarea}
					value={textoDeEntrada}
					type="text"
					placeholder="Agrega tareas"
					required />
				<input className="addBtn" type="submit" value="Add" />
			</form>
			<ul>
				{
					tareas.map((tarea, indice) => (
						<li key={tarea.id}>
							{tarea.label}
							<span
								onClick={() => eliminarTarea(indice)}
								className="papelera fa-regular fa-trash-can"
							></span>
						</li>
					))}
			</ul>
			<div className="contador">{`${tareas.length} Tareas`}</div>
		</div>
	);
};

export default Home;
