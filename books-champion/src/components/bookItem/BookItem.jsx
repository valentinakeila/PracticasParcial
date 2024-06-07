import PropTypes from "prop-types";

import { useState } from "react";

import { Button, Card } from "react-bootstrap";

const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {
  const [newTitle, setNewTitle] = useState(title);
  const clickHandler = () => {
    console.log(newTitle);
    setNewTitle("¡Actualizado!");
  };
  return (
    <Card className="mx-3" style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl ?? "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{newTitle}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating?.length} estrellas</div>
        <p>{pageCount} páginas</p>
        <Button onClick={clickHandler}>Actualizar título</Button>
      </Card.Body>
    </Card>
  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array,
  imageUrl: PropTypes.string.isRequired,
};
export default BookItem;

