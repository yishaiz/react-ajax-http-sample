import React, { Component } from "react";

import Posts from "./Posts/Posts";

import "./Blog.css";

// import axios from "axios";


class Blog extends Component {
  render() {
    // console.log(this.state.selectedPostId);

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>

        <Posts></Posts>

        {/* <section className="Posts">
          {posts}
        </section> */}

        {/* 
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
