import React from "react";

const Frageformular = () => {
	console.log("Frageformular laddas!");

	return(
		<main>
			<form autoComplete="off">
			<h2> Frågeformulär</h2>
			<table>
				<tr>
					<td><label for="namn">Ditt namn</label></td>
				</tr>
				<tr>
					<td><input type="text" id="namn" name="namn" /></td>
				</tr>
				<tr>
					<td><label for="epost">Din e-post</label></td>
				</tr>
				<tr>
					<td><input type="email" id="epost" name="epost" /></td>
				</tr>
				<tr>
					<td><label for="arende">Ditt ärende</label></td>
				</tr>
				<tr>
					<td><input type="text" id="arende" name="arende"/></td>
				</tr>
				<tr>
					<td><button type="submit">Skicka</button></td>
				</tr>
			</table>
		</form>
		</main>
	)
}

export default Frageformular;