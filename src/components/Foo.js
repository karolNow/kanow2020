import React from 'react';

const Foo = () => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';

  if(url==='/projects' ||url==='/projects/' ){
    return (
        <a href='/web' className="a-button">Digital Projects</a>
    );
  }
  else if(url==='/web' || url==='/web/'){
    return (
        <a href='/projects' className="a-button">Tangible projects</a>
    );
  }
  else{
    return (
        null
    );
  }

};

export default Foo;