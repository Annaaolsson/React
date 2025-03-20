import React from "react";
import startsidaImg from "../bilder/startsida.jpg";
import { Link } from "react-router-dom";
import LikeButton from "../components/LikeButton";


class Home extends React.Component {
	render() {
	  return (
		<main className="home-container">
		  {/* Bilden ligger överst */}
		  <img className="header-image" src={startsidaImg} alt="Startsida" />
  
		  {/* Textsektionerna */}
		  <div className="content-container">
			<section className="section">
			  <h2>Om oss</h2>
			  <p>Älmeboda ligger centralt i sydöstra Sverige. 
					Mittemellan Växjö och Karlskrona. Vi har nära till nästan allt 
					utom bilköer, avgaser och högahuspriser. Nära har vi till exempel 
					till naturen, badsjöar,svampskogar, Tingsryd, Emmaboda, Nybro, 
					Växjö och Karlskrona.</p> 
					
				<p>Älmeboda ligger i Tingsryds kommun i Småland, 
					mitt i Hästriket ochgranne till Glasriket. Älmeboda ligger i 
					Kronobergs län som har den lägsta arbetslösheten i Sverige. 
					I Kronobergs län lever man,tillsammans med Halland, längst i 
					landet. Kronobergarna är dessutom defriskaste invånarna i riket.</p>
			</section>
			<section className="section">
			  <h2>Kontakt</h2>
			  <p>Drivs av Älmeboda Sockenkommitté.</p>
			  <p>info@almeboda.nu</p>
			  <p>Telefon: 012-345 6789</p>
			  <Link to="/frageformular">Frågeformulär</Link>
			</section>
			{/* 🆕 Like-knappen */}
			<section className="section">
            <h2>Gillar du vår sida?</h2>
            <LikeButton label="Gilla sidan!" color="#c9beb7" />
          </section>
		  </div>
		</main>
	  );
	}
  }
  
  export default Home;