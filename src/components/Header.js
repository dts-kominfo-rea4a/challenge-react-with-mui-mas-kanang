// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import "./Header.css"

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="title">Call a Friend</div>
        <div className="subtitle"><span>Your friendly contact app</span></div>
      </div>

    </>
  );
};

export default Header;
