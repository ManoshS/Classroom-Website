import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Created My Manosh with love .</p>
        <p>
          <span className="text-gray-400 hover:text-white">Heliverse</span> |
          <span className="text-gray-400 hover:text-white">Assignment </span>
          <p>classroom website </p>
          <span className="text-gray-400 hover:text-white">contect No: 9632148911</span> |
          <span className="text-gray-400 hover:text-white">email : smanosh73@gmail.com </span> <br />

          <a href="https://www.github.com/ManoshS/"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
            <i class="fab fa-github fa-2x"></i></a> |

          <a href="https://www.linkedin.com/in/manosh-s-930241273/"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
            <i class="fab fa-linkedin fa-2x"></i></a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
