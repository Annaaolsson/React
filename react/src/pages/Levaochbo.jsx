import React from "react";
const images = import.meta.glob("../bilder/*.{png,jpg,jpeg,svg}", { eager: true });

console.log(images);

class Levaochbo extends React.Component {
	render() {
		return(
			<main>
				<section className="experience">
					<h2>Leva & bo</h2>
	
					{/* Välkommen hit-sektionen */}
					<div className="category">
						<div className="category-header">
							<img src={images["../bilder/valkommen.png"].default} alt="Valkommen" />
							<button class="category-btn">Välkommen hit!</button>
						</div>
						<div className="items">
							<div className="textbox"> 
								<h3>Bo centralt - mitt i naturen!<br />Här får du ut det bästa av det mesta!</h3>
								<p>Välkommen till Älmeboda - en liten men stark bygd med massor av framtidstro! 
									I Älmeboda blir du aldrig ”en i mängden” - här är DU en unik person, med 
									möjlighet att påverka din miljö och din framtid. Natursköna Älmeboda ligger 
									mitt i Sydostsverige, med fem städer på mindre än en timmes avstånd. Här 
									finns allt du kan önska inom behändig räckvidd. Vi har en väl utbyggd barnomsorg 
									och en fin friskola, med bibliotek på området. Ett nytt ”byahus” med 
									gymnastikhall/sporthall/gym/bibliotek är uppfört i socknens egen regi och 
									invigdes våren 2004. Ett stort antal föreningar med ungdomsaktiviteter för 
									både killar och tjejer.</p>
							</div>
						</div>
					</div>
			
					{/* Barnomsorg-sektionen */}
					<div className="category">
						<div className="category-header">
							<img src={images["../bilder/barnomsorg.png"].default} alt="Barnomsorg" />
							<button className="category-btn">Barnomsorg</button>
						</div>
						<div className="items">
							<div className="textbox"> 
								<p>Bullebyns förskola. Vi har en skön och underbar natur runt vår förskola
									och en stor härlig utegård. På vår utegård finns cykelvägar, en lekstuga,
									gungor, och en sandlåda. Förskolan har just nu ca 25 barn inskrivna. 
									Barnen är fördelade på två olika avdelningar. Mellangården för 1-3 åringar
									och Sörgården för 4-5 åringar. I samma byggnad finns skolbarnomsorg 
									och förskoleklass för 6 åringar.</p>
							</div>
						</div>
					</div>
					
					{/* Fritid-sektionen */}
					<div className="category">
						<div className="category-header">
							<img src={images["../bilder/fritid.png"].default} alt="Fritid" />
							<button className="category-btn">Fritid</button>
						</div>
						<div className="items">
							<div className="textbox">
								<h3>Byahuset valvet</h3>
								<p>Byahuset Valvet i Rävemåla stod färdigt våren 2004 - ett fantastiskt 
									bevis på visionär initiativkraft, sammanhållning och offervilja i lilla
									Älmeboda socken med sina bara 1.000 invånare. Idén var helt och hållet 
									lokala eldsjälars - och Sparbanken Ekens. Det största byggnadsprojektet 
									i socknen sedan kyrkan byggdes på 1870-talet kom att kosta runt 10 miljoner 
									kronor. Finansieringen kom huvudsakligen från det lokala näringslivet 
									främst representerat av den 120-åriga, fristående Sparbanken Eken, vars 
									huvudmän utan debatt sköt till en grundplåt på hela 4 miljoner. Tingsryds 
									kommun beviljade 2,3 miljoner i anledning av att Rävemålaskolans gamla 
									gymnastiksal behövde ersättas. Lokala småföretagare, skogsägare och 
									privatpersoner ställde generöst upp med resten.</p>
							</div>
							<div className="textbox">
								<h3>Rävemåla Padel & multisportsplan</h3>
								<p>Hej och välkommen till Rävemåla Padel & Multisportplan. 
									Här kan man spela padel, badminton, vollyboll och varför inte något mer?! 
									<br /><br />
									Bokningar görs i appen Playtomic.</p>
							</div>
						</div>
					</div>
			
					{/* Samlingslokaler-sektionen */}
					<div className="category">
						<h2>Vi erbjuder även flera samlingslokaler, kanske till ditt nästa event?</h2>
						<div className="items">
							<div className="item">
								<h3>Rävemåla Bygdegård</h3>
								<p>Ägare: Rävemåla bygdegårdsförening<br />
									Uthyrning: Yvonne Torstensson<br />
									Tel: 0477-600 55, 070-656 66 80<br />
									Samlingssal: 140 m2<br />
									Scen: ca 30 m2<br />
									Läktare: ca 40 m2<br />
									B-sal: ca 80 m2, kan delas med vikvägg<br />
									Kök med spis, kyl/frys, diskmaskin<br />
									Källarvåning med 2 fritidslokaler, ca 130 m2<br />
									Handikappanpassat med ramp vid entré. RWC</p>
							</div>
							<div className="item">
								<h3>Holken, Yxnanäs</h3>
								<p>Ägare: Ideella föreningen Holken<br />
									Uthyrning: Kristina Eriksson 070-568 94 99, 
									Bengt Holmqvist 070-654 49 33<br />
									e-post: holkenyxnanas@gmail.com<br />
									Samlingssal: ca 350 m2<br />
									Nytt modernt kök med 2 spisar, kyl/frys, diskmaskin, 
									porslin till 150 pers, 2 gästrum som är 3+3 bäddar, Studierum, 
									Hörselslinga, Högtalaranläggning, Handikappanpassat med ramp, 
									toalett och dusch</p>
							</div>
							<div className="item">
								<h3>Byahuset, Rävemåla</h3>
								<p>Kyrkogatan 31 D, Rävemåla<br />
									Uthyrning av konfenrensrum: Biblioteket i Rävemåla.<br />
									Öppet tis och tors 10-13, 16-19<br />
									Tel: 0477-445 52</p>
							</div>
							<div>
								<span className="arrow">➜</span>
							</div>
						</div>
					</div>
	
				</section>
			</main>
		)
	}
}

export default Levaochbo;