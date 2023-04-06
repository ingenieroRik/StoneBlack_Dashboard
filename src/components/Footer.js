import React from 'react';
import '../assets/css/footer.css';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
			

							<section className="footer">
								<section className="sector-footer">
									<h2 className="titulo-footer">Pagá con las tarjetas:</h2>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/american-express.png"/>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/visa.png"/>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mastercard.png"/>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/cabal.png"/>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/diners-club.png"/>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/naranja.png"/>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/maestro.png"/>
								</section>
								<section className="sector-footer">
								
									<h2 className="titulo-footer">Seguridad, de principio a fin pagando con: </h2>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/pagofacil.png"/>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mercadopago.png"/>
									<img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/rapipago.png"/>
								</section>
								<section className="sector-footer">
								<h6>Powered by: DH_grupo3</h6>
								</section>
								
							</section>


			</footer>

        </React.Fragment>
    )
}
export default Footer;