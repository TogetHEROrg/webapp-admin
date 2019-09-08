import React from 'react';
import './styles.css'

const Main = (props) => {
  return (
    <div className="container">
      <div className="nav">
        <div className="container-2">
          <h1>Title</h1>
          <button>Clickeame!</button>
        </div>
      </div>
      <div className="nav">
        <div className="container-2">
          <h5>Subtitle</h5>
        </div>
      </div>


      {props.children}
    </div>
  )
}

export default Main;