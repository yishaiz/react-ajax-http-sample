import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    // console.log("ajax");
    const url = "https://jsonplaceholder.typicode.com/posts";

    axios.get(url).then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Max"
        };
      });

      this.setState({ posts: updatedPosts });
      console.log(response.data);
    });
  }

  postSelectedHandler = id => {
    // console.log(id)
    this.setState({ selectedPostId: id });
  };

  render() {
    // console.log(this.state.selectedPostId);

    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        ></Post>
      );
    });

    return (
      <div>
        <section className="Posts">
          {posts}
          {/* <Post />
          <Post />
          <Post /> */}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
