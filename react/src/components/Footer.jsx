import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component{
	render() {
		return(
			<footer>
				<div class="footer-container">
				
				<Link to="/" className="logo2">
        			<h1>Älmeboda <br /> Socken</h1>
      			</Link>
			
					<div class="footer-links">
						<h4>Snabblänkar</h4>
						<ul>
						<li><a href="#">Om oss</a></li>
						<li><a href="#">Tjänster</a></li>
						<li><a href="#">Sekretesspolicy</a></li>
						</ul>
					</div>
		
					<div class="footer-contact">
						<h4>Kontakt</h4>
						<p>Email: info@almeboda.nu</p>
						<p>Telefon: 012-345 6789</p>
					</div>
		
					<div class="footer-social">
						<h4>Följ oss</h4>
						<a href="https://www.facebook.com/groups/52583509415/">Facebook</a> | 
						<a href="https://www.instagram.com/almeboda/">Instagram</a> | 
						<a href="#">LinkedIn</a>
					</div>
				</div>
				<p class="footer-bottom">© 2025 Älmeboda Socken. Alla rättigheter förbehållna.</p>
			</footer>
		)
	}
}

export default Footer;