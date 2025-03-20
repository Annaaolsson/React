import React from "react";
const images = import.meta.glob("../bilder/*.{png,jpg,jpeg,svg}", { eager: true });

console.log(images);

class Upplev extends React.Component {
	render() {
		return(
			<main>
				<section class="experience">
					<h2>Upplev</h2>
	
					{/* Äta-sektionen */}
					<div class="category">
						<div class="category-header">
							<img src={images["../bilder/våfflor.png"].default} alt="Våfflor" />
							<button class="category-btn">Äta</button>
						</div>
						<div class="items">
							<div class="item">
								<h3>Restaurang Rävemålet 2.0</h3>
								<a href="https://martinasmat.wordpress.com/" target="_blank">Besök</a>
							</div>
							<div class="item">
								<h3>Våffelcaféet i Rävemåla hembygdspark</h3>
								<a href="https://www.hembygd.se/almeboda" target="_blank">Besök</a>
							</div>
							<div class="item">
								<h3>Abrahams Camp</h3>
								<a href="https://www.abrahamscamp.com/" target="_blank">Besök</a>
							</div>
							<div>
								<span class="arrow">➜</span>
							</div>
						</div>
					</div>
		
					{/* Sevärt-sektionen */}
					<div class="category">
						<div class="category-header">
							<img src={images["../bilder/fiske.png"].default} alt="Fiske" />
							<button class="category-btn">Sevärt</button>
						</div>
						<div class="items">
							<div class="item">
								<h3>Älmeboda gamla kyrka</h3>
								<p>Ruin från 1100-talet. Mycket naturskönt och rofyllt.</p>
							</div>
							<div class="item">
								<h3>Flishult</h3>
								<p>Klostergrottan från yngre stenåldern. Sällsynt grottbildning.</p>
							</div>
							<div class="item">
								<h3>Kulagölen</h3>
								<p>Ädelfiske. Fiskekort köps på plats.</p>
							</div>
							<div>
								<span class="arrow">➜</span>
							</div>
						</div>
					</div>
		
					{/* Boende-sektionen */}
					<div class="category">
						<div class="category-header">
							<img src={images["../bilder/camping.png"].default} alt="Camping" />
							<button class="category-btn">Boende</button>
						</div>
						<div class="items">
							<div class="item">
								<h3>Abrahams Camp</h3>
								<a href="https://www.abrahamscamp.com/" target="_blank">Besök</a>
							</div>
							<div class="item">
								<h3>Korrö mat och boende</h3>
								<a href="https://korro.se/" target="_blank">Besök</a>
							</div>
							<div class="item">
								<h3>Djupasjöns naturcamping</h3>
								<a href="https://holken-yxnanas.se/399221296" target="_blank">Besök</a>
							</div>
							<div>
								<span class="arrow">➜</span>
							</div>
						</div>
					</div>
				</section>
			</main>
		)
	}
}

export default Upplev;