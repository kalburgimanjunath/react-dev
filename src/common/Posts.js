import React from 'react';
import Post from './sharedComponent/Post';
import Nav from 'react-bootstrap/Nav';
export default function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Feed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Latest</Nav.Link>
        </Nav.Item>
      </Nav>

      <div>
        <div>
          {posts &&
            posts.map((item) => {
              return <Post post={item} />;
            })}
        </div>
        <div>Latest</div>
        <div>Top</div>
      </div>
    </div>
  );
}
