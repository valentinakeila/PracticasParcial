import { useState } from "react";

const ChangeDollar = ({ onSetCotization }) => {

    const [newPrice, setNewPrice] = useState("");
    const [showCotizator, setShowCotizator] = useState(true);

    const onChangeHandler = (event) => {
        const auxiliarNewPrice = event.target.value;
        setNewPrice(auxiliarNewPrice);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onSetCotization(newPrice);
        setNewPrice("")
    };

    const onClickHandler = () => {
        if (showCotizator) {
            setShowCotizator(false);
        } else {
            setShowCotizator(true);
        }
    };

  return (
    <>
        <button onClick={onClickHandler}>{showCotizator ? "Ocultar cotizador" : "Mostrar Cotizdor"}</button>
        {showCotizator
            ? <form onSubmit={onSubmitHandler}>
                <label htmlFor="mi-input">Cotización</label>
                <input
                    id="mi-input"
                    type="text"
                    value={newPrice}
                    onChange={onChangeHandler}/>
                <button type="submit">Aplicar</button>
            </form>
            : ""
        }
    </>
  )
}

export default ChangeDollar;