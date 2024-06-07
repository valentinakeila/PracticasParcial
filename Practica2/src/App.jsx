import './App.css'
import Beers from './components/Beers';
import AvailableBeers from './components/AvailableBeers'; 


function App() {
  const beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

  return (
    <div>
      <h1>Bienvenido a la Aplicación de Cervezas</h1>
      {beers.map(beer => (
        <Beers 
          key={beer.id}
          idBeer={beer.id}
          name={beer.beerName} 
          style={beer.beerStyle}
          beerPrice={beer.price}
          beerAvailable={beer.available}
        />
      ))}

{beers.map(beer => (
        <AvailableBeers 
          key={beer.id}
          idBeer={beer.id}
          name={beer.beerName} 
          style={beer.beerStyle}
          beerPrice={beer.price}
          beerAvailable={beer.available}
        />
      ))}


    </div>
  );
}

export default App;