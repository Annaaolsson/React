import React from "react";
const images = import.meta.glob("../bilder/*.{png,jpg,jpeg,svg}", { eager: true });

console.log(images);

class Aretsalmebodabo extends React.Component{
	render(){
		return(
			<main>
				<div class="container">
					<section class="aacontainer">
						<h2>Årets Älmebodabo</h2>

						<div class="year-grid">
							<div class="year">
								<h2>2023</h2>
								<img src={images["../bilder/kerstin-lena.png"].default} alt="Kerstin Petersén och Lena Stjernfeldt" />
								<p>Kerstin Petersén och Lena Stjernfeldt</p>
							</div>

							<div class="year">
								<h2>2022</h2>
								<img src={images["../bilder/utvecklingsforening.png"].default} alt="Älmeboda Utvecklings- och Företagarförening" />
								<p>Älmeboda Utvecklings- och Företagarförening</p>
							</div>

							<div class="year">
								<h2>2021</h2>
								<img src={images["../bilder/rolfbrakander.png"].default} alt="Rolf Brakander" />
								<p>Rolf Brakander</p>
							</div>

							<div class="year">
								<h2>2020</h2>
								<img src={images["../bilder/perolof.png"].default} alt="Per-Olof Håkansson" />
								<p>Per-Olof Håkansson, Rävemåla</p>
							</div>

							<div class="year">
								<h2>2019</h2>
								<p>Micke Stjernfeldt, Rävemåla</p>
							</div>

							<div class="year">
								<h2>2018</h2>
								<img src={images["../bilder/hembygdsforening.png"].default} alt="Älmeboda Hembygdsförening" />
								<p>Älmeboda Hembygdsförening</p>
							</div>

							<div class="year">
								<h2>2017</h2>
								<img src={images["../bilder/yvonne.png"].default} alt="Yvonne Torstensson" />
								<p>Yvonne Torstensson, Rävemåla</p>
							</div>

							<div class="year">
								<h2>2016</h2>
								<img src={images["../bilder/friskolegruppen.png"].default} alt="Friskolegruppen och Henrik Nilsson" />
								<p>Friskolegruppen och Henrik Nilsson</p>
							</div>

							<div class="year">
								<h2>2015</h2>
								<img src={images["../bilder/beritotore.png"].default} alt="Berit och Tore Carlzon" />
								<p>Berit och Tore Carlzon</p>
							</div>

							<div class="year">
								<h2>2014</h2>
								<img src={images["../bilder/fiber.png"].default} alt="Älmeboda Fiber" />
								<p>Älmeboda Fiber</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		)
	}
}

export default Aretsalmebodabo;