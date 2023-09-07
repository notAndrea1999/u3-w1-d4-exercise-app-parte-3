import { Component } from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTdjMWMwMzRmZjAwMTQwM2Y0ZjEiLCJpYXQiOjE2OTQwODg4NzgsImV4cCI6MTY5NTI5ODQ3OH0.XW49FgQjSHBLNp7b8LzgB31rJ7v9CRGspFQFQ6sAa8s",
  },
};

class CommentArea extends Component {
  state = {
    selected: false,
    savedComments: [],
  };

  fetchComments = async () => {
    try {
      const response = await fetch(URL + this.props.id, options);
      const comment = await response.json();
      //   console.log(comment);
      this.setState({ savedComments: comment });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    console.log("Component Did Mount");
    this.fetchComments();
  };

  render() {
    return (
      <>
        <CommentList list={this.state.savedComments} />
        <AddComment id={this.props.id} />
      </>
    );
  }
}

export default CommentArea;
