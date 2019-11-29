import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

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
                <Link to="/">Home</Link>
                {/* <a href="/">Home</a> */}
                
              </li>
              <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit"
                  }}
                >New Post</Link>

              {/* <li>
                <a href="/new-post">New Post</a>
              </li> */}
            </ul>
          </nav>
        </header>

        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />

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
