import React from 'react';
export default function Navbar() {
  const navitem = [
    'Home',
    'Reading List',
    'Listings',
    'Podcasts',
    'Videos',
    'Tags',
    'FAQ',
    'DEV Shop',
    'Sponsors',
    'About',
    'Contact',
  ];
  return (
    <div>
      {navitem.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
