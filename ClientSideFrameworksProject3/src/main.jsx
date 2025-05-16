import { StrictMode } from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './CSS/main.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Products from './Products.jsx';
import Future from './Future.jsx';

function funcRoot(value) {
  const root = createRoot(document.getElementById(value));
  return root;
}

export function contRender(value) {
  switch (value) {
    case 'Home': //creates a home render in content
      divContent.render(
        <StrictMode>
          <Home />
        </StrictMode>
      );
      break;

    case 'About': //Creates a ABout render in content
      divContent.render(
        <StrictMode>
          <About />
        </StrictMode>
      );
      break;

    case 'Contact': //Creates a Contact Render in content
      divContent.render(
        <StrictMode>
          <Contact />
        </StrictMode>
      );
      break;

    case 'Products': //Creates a Products Render in content
      divContent.render(
        <StrictMode>
          <Products />
        </StrictMode>
      );
      break;
    case 'Future': //Creates a future seciton in content
      divContent.render(
        <StrictMode>
          <Future />
        </StrictMode>
      );
  }
}
function Nav() {
  return (
    <>
      <div className="navigation">
        <button className="nav" onClick={() => contRender('Home')}>
          Home
        </button>
        <button className="nav" onClick={() => contRender('About')}>
          About
        </button>
        <button className="nav" onClick={() => contRender('Contact')}>
          Contact
        </button>
        <button className="nav" onClick={() => contRender('Products')}>
          Products
        </button>
        <button className="nav" onClick={() => contRender('Future')}>
          Future
        </button>
      </div>
    </>
  );
}

//use for navigation and the like for the main stuff
const divRoot = funcRoot('root');
const divContent = funcRoot('content');

divRoot.render(
  <StrictMode>
    <div className="header">
      <header>
        <div className="site_title_header">
          <img
            className="comp_img"
            src="/src/Images/ComputerImage.png"
            alt="Image of a computer and mouse"
          />
          <h1 className="site_name">Computer Store Website</h1>
        </div>

        <Nav />
      </header>
    </div>
  </StrictMode>
);
contRender('Home');
/* 
//is here temp, can use the content render
funcRoot("content").render(
  <StrictMode>
    <Home />
  </StrictMode>
);

contRender("About");
*/
