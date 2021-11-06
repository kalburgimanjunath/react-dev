import React from 'react';
import '../style/index.css';
import { Header, Footer, Navbar, Posts } from '../common/index';
export default function App() {
  return (
    <div>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
