import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import Badge from 'react-bootstrap/Badge';
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
      <div>
        <Avatar />
        <div>
          <Link to="/postid">{post.title}</Link>
        </div>
        <div>
          {post.tags.map((item) => {
            return (
              <Badge bg="primary" text="light">
                {item}
              </Badge>
            );
          })}
        </div>
        <div>
          <Link to="/link">
            <i class="far fa-heart"></i>
            {post.likes}
          </Link>
          <Link to="/link">
            <i class="far fa-comment"></i>
            {post.likes}
          </Link>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}
