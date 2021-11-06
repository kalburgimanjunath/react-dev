import React from 'react';
import Post from './sharedComponent/Post';
export default function Posts() {
  const posts = [
    {
      id: 1,
      title: 'Hello world post 1',
      url: '',
      created_at: '10th July',
      tags: ['money', 'only', 'honey'],
      comments: [
        {
          id: 1,
          comments: 'hello manju 123',
        },
        {
          id: 2,
          comments: 'hello manju 123',
        },
        {
          id: 3,
          comments: 'hello manju 123',
        },
      ],
      likes: 1000,
    },
    {
      id: 1,
      title: 'Hello world post 1',
      url: '',
      created_at: '10th July',
      tags: ['money', 'only', 'honey'],
      comments: [
        {
          id: 1,
          comments: 'hello manju 123',
        },
        {
          id: 2,
          comments: 'hello manju 123',
        },
        {
          id: 3,
          comments: 'hello manju 123',
        },
      ],
      likes: 1000,
    },
  ];
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        <li>Feed</li>
        <li>Latest</li>
        <li>Top</li>
      </ul>
      <div>
        <div>
          <h1>Feed</h1>
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
