import React from 'react';
import '../style/index.css';
import { Header, Footer, Navbar, Posts, Widgets } from '../common/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function App() {
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
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Navbar />
          </Col>
          <Col xs="6">
            <Posts posts={posts} />
          </Col>
          <Col xs="3">
            <Widgets title="Listings" posts={posts} />
            <Widgets title="News" posts={posts} />
            <Widgets title="Help" posts={posts} />
            <Widgets title="Explain" posts={posts} />
            <Widgets title="Challenge" posts={posts} />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}
