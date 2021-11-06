import React from 'react';
export default function TopMenu() {
  const navitem = ['Message', 'Notification', 'Profile'];
  return (
    <div>
      <div>
        <button>Create Post</button>
      </div>
      {navitem.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
