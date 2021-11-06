import React from 'react';
import { Link } from 'react-router-dom';
export default function Post({ post }) {
  // const post = [
  //   {
  //     id: 1,
  //     title: 'Hello world post 1',
  //     url: '',
  //     created_at: '10th July',
  //     tags: ['money', 'only', 'honey'],
  //     comments: [
  //       {
  //         id: 1,
  //         comments: 'hello manju 123',
  //       },
  //       {
  //         id: 2,
  //         comments: 'hello manju 123',
  //       },
  //       {
  //         id: 3,
  //         comments: 'hello manju 123',
  //       },
  //     ],
  //     likes: 1000,
  //   },
  // ];
  return (
    <div>
      <h1>Avatar</h1>
      <div>
        <div>
          <Link to="/postid">{post.title}</Link>
        </div>
        <div>
          <Link to="/link">{post.likes}</Link>
        </div>
      </div>
    </div>
  );
}
