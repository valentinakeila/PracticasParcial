const BeerItem = ({ cotization ,id, beerName, beerStyle, price, available }) => {

    return (
      <>
        <h4>{beerName}</h4>
        <h5>{id}</h5>
        <h5>{beerStyle}</h5>
        <h5>${price * cotization}</h5>
        <h5>{available}</h5>
        <hr/>
      </>
    )
  }
  
  export default BeerItem;