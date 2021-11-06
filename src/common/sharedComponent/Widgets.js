import React from 'react';
import Post from './Post';
export default function Widgets({ title, posts }) {
  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((item) => {
          return <Post post={item} />;
        })}
    </div>
  );
}
