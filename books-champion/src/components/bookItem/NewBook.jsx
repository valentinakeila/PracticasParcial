import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewBook = ({ onBookDataSaved }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredRating, setEnteredRating] = useState("");
  const [enteredPageCount, setEnteredPageCount] = useState("");
  const [enteredImageUrl, setEnteredImageUrl] = useState("");

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const changeRatingHandler = (event) => {
    setEnteredRating(event.target.value);
  };

  const changePageCountHandler = (event) => {
    setEnteredPageCount(event.target.value);
  };

  const changeImageUrlHandler = (event) => {
    setEnteredImageUrl(event.target.value);
  };

  const submitBookHandler = (event) => {
    event.preventDefault();
    const bookData = {
      bookTitle: enteredTitle,
      bookAuthor: enteredAuthor,
      bookRating: enteredRating !== "" ? Array(parseInt(enteredRating, 10)).fill("*") : Array(0),
      pageCount: parseInt(enteredPageCount, 10),
      imageUrl: enteredImageUrl,
    };
    onBookDataSaved(bookData);
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredRating("");
    setEnteredPageCount("");
    setEnteredImageUrl("");
  };

  return (
    <Card className="m-4 w-50" bg="success">
      <Card.Body>
        <Form className="text-white" onSubmit={submitBookHandler}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar título"
                  onChange={changeTitleHandler}
                  value={enteredTitle}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookAuthor">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  onChange={changeAuthorHandler}
                  type="text"
                  placeholder="Ingresar autor"
                  value={enteredAuthor}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookRating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  onChange={changeRatingHandler}
                  placeholder="Ingresar cantidad de estrellas"
                  max={5}
                  min={0}
                  value={enteredRating}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookPageCount">
                <Form.Label>Cantidad de páginas</Form.Label>
                <Form.Control
                  onChange={changePageCountHandler}
                  type="number"
                  placeholder="Ingresar cantidad de páginas"
                  min={1}
                  value={enteredPageCount}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Form.Group className="mb-3" controlId="bookImageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control
                onChange={changeImageUrlHandler}
                type="text"
                placeholder="Ingresar url de imagen"
                value={enteredImageUrl}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col md={3} className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Agregar lectura
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

NewBook.propTypes = {
  onBookDataSaved: PropTypes.func.isRequired,
};

export default NewBook;
