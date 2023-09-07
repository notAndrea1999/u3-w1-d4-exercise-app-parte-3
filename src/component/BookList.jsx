import { Component } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    savedInput: "",
    filteredBook: this.props.books,
  };

  filterBookList = (value) => {
    const filteredBooks = this.props.books.filter((book) => book.title.toLowerCase().includes(value));
    // console.log(filteredBooks);
    this.setState({ filteredBook: filteredBooks });
  };

  handleChange = (value) => {
    this.setState({ savedInput: value });
    this.filterBookList(value.toLowerCase());
  };

  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Find a book</InputGroup.Text>
          <Form.Control
            value={this.state.savedInput}
            placeholder="Digita un libro"
            onChange={(event) => {
              this.filterBookList();
              this.handleChange(event.target.value);
            }}
          />
        </InputGroup>
        <Row>
          {this.state.filteredBook.map((book, index) => (
            <Col className="col-12 col-sm-6 col-md-4 col-lg-3 gy-4" key={index}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
