import React, { Component } from "react";

import "./FullPost.css";
import { anotherInstance as axios } from "../../../axios";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidUpdate() {
    console.log("componentDidUpdate, id", this.props.id);

    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id != this.props.id)
      ) {
        const url = "/posts/";

        axios.get(url + this.props.id).then(response => {
          //   console.log(response);
          const loadedPost = response.data;
          this.setState({ loadedPost });
        });
      }
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;

// const url = "https://jsonplaceholder.typicode.com/posts/";
