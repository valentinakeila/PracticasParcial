import  PropTypes from "prop-types"

const Beers = ({idBeer, name, style, beerPrice,beerAvailable }) => {
    const conversionRate = 350; // Suponiendo una tasa de conversión de 1 USD a 350 ARS
    const beerPriceInARS = beerPrice * conversionRate;
  return (
 <div>
    <p>{idBeer}</p>
    <p>{name}</p>
    <p>{style}</p>
    <p>Precio (ARS): {beerPriceInARS}</p>
    <p>{beerAvailable}</p>
 </div>
  );
};

Beers.propTypes = {
    idBeer:PropTypes.number, 
    name:PropTypes.string, 
    style:PropTypes.string, 
    beerPrice:PropTypes.number,
    beerAvailable:PropTypes.bool,
}


export default Beers;
