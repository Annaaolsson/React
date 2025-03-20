import React from "react";
const images = import.meta.glob("../bilder/*.{png,jpg,jpeg,svg,mp4}", { eager: true });

console.log(images);

const Handelser = () => {
	return(
		<main>
			<div class="eventcontainer">
				<h2>Händelser</h2>
			
				<div class="event-wrapper">
					<p class="date">12 januari 2025</p>
					<div class="event">
						<video width="200" height="140" controls>
							<source src={images["../bilder/knutsfest.mp4"].default} alt="Knuts fest" />
						</video>
						<div class="event-content">
							<h2>Knuts fest 2025!</h2>
							<p>Knutsfest i bygdegården! Julen skulle dansas ut och 2024 års Älmebodabo 
							skulle koras. KNAPPT 30 personer kom och en ring runt granen, varav 3 barn 
							dansade friskt och gjorde vad de kunde! Till Årets Älmebodabor korades 
							Anders Karlsson, mångsysslad idell kraft i Älmeboda och Martina Sandén, 
							Krögare på byns Restaurang. Läs motiveringar under bilder nedan.</p>
						</div>
					</div>
				</div>
			
				<div class="event-wrapper">
					<p class="date">22 december 2024</p>
					<div class="event">
						<img src={images["../bilder/godjul.png"].default} alt="God Jul" />
						<div class="event-content">
							<h2>God Jul!</h2>
							<p>God jul önskar Älmeboda sockenskommitté!</p>
						</div>
					</div>
				</div>
			
				<div class="event-wrapper"> 
					<p class="date">27 maj 2024</p>
					<div class="event">
						<img src={images["../bilder/donationsfond.png"].default} alt="KDonationsfond" />
						<div class="event-content">
							<h2>Inga och Bertil Holmbergs donationsfond</h2>
							<p>Den 25 maj delade styrelsen för Stiftelsen Inga och Bertil 
								Holmbergs donationsfond ut stipendie från fonden till 
								Ellen Uleskog, Dångebobördig. Ceremonin ägde rum i Södra Sandsjö 
								kyrka i samband med Sandsjödagarna.</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Handelser; 