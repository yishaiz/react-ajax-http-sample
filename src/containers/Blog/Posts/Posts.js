import React, { Component } from "react";
import axios from "../../../axios";
import Post from "./Post/Post";
import FullPost from "../FullPost/FullPost";
import NewPost from "../NewPost/NewPost";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    console.log("[Blogs] componentDidMount")
    // console.log("ajax");
    // const url = "https://jsonplaceholder.typicode.com/posts";
    const url = "/posts";
    // const url = "https://jsonplaceholder.typicode.com/posts222";

    axios
      .get(url)
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });

        this.setState({ posts: updatedPosts });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    // console.log(id)
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = (
      <h1 style={{ textAlign: "center", color: "red" }}>
        something went wrong !
      </h1>
    );

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          ></Post>
        );
      });
    }

   

    return (
      <section className="Posts">{posts}</section>

      //   <article className="Post" onClick={props.clicked}>
      //   <h1>{props.title}</h1>
      //   <div className="Info">
      //     <div className="Author">{props.author}</div>
      //   </div>
      // </article>
    );
  }
}

export default Posts;
