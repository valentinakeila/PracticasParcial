import { useState } from "react";

const NewBeer = () => {

    const [nameInput, setNameInput] = useState("");
    const [styleInput, setStyleInput] = useState("");
    const [priceInput, setPriceInput] = useState(1);
    const [avYesInput, setAvYesInput] = useState(false);
    const [avNoInput, setAvNoInput] = useState(false);

    const onChangeNameHandler = (event) => {
        const auxiliarInputName = event.target.value;
        setNameInput(auxiliarInputName);
    };

    const onChangeStyleHandler = (event) => {
        const auxiliarInputStyle = event.target.value;
        setStyleInput(auxiliarInputStyle);
    };

    const onChangePriceHandler = (event) => {
        const auxiliarInputPrice = event.target.value;
        setPriceInput(auxiliarInputPrice);
    };

    const checkedYesHandler = () => {
        setAvYesInput(true);
        setAvNoInput(false);
    };

    const checkedNoHandler = () => {
        setAvYesInput(false);
        setAvNoInput(true);
    };

    const onSubmitHandler = () => {
        //lógica
    };

    return (
      <div>
            <br/>
            <hr/>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="name">Beer Name: </label>
            <input
                id="name"
                type="text"
                placeholder="insert name..."
                value={nameInput}
                onChange={onChangeNameHandler}
            />
            <br/>
            <label htmlFor="style">Beer Style: </label>
            <input
                id="style"
                type="text"
                placeholder="insert style..."
                value={styleInput}
                onChange={onChangeStyleHandler}
            />
            <br/>
            <label htmlFor="price">Beer Price: </label>
            <input
                id="price"
                type="number"
                placeholder="insert price..."
                value={priceInput}
                onChange={onChangePriceHandler}
            />
            <p>Availability</p>
            <label htmlFor="available-yes">Yes: </label>
            <input
                id="available-yes"
                type="radio"
                name="radioYesNO"
                checked={avYesInput}
                onChange={checkedYesHandler}
            />
            <label htmlFor="available-no">No: </label>
            <input
                id="available-no"
                type="radio"
                name="radioYesNO"
                checked={avNoInput}
                onChange={checkedNoHandler}
            />
            <br/>
            <br/>
            <button type="submit">Add new beer</button>
          </form>
          <hr/>
      </div>
    )
  }
  
  export default NewBeer;