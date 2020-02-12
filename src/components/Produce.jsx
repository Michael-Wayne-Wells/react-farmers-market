import React, { useState } from "react";
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';
import dancingCarrot from './../images/dancingCarrot.gif';
import hunkyhonky from './../images/hunkhonky.gif';

function Produce(props){
  var month = {
    color: "white",
    backgroundColor: "#939665",
    padding: "8px",
    borderRadius: "8px",
    margin: "0 auto",
    marginBottom: "20px",
    width: "100%",
    fontFamily: 'bangers'
  }

  var monthTitle = {
    color: "white"
  }

  var produceSelection = {
    textShadow: "1.5px 1.5px black",
    backgroundImage : `url(${hunkyhonky})`,
    borderRadius: "4px",
    border: "2px solid #8f8865"
  }

  const [showText, setShowText] = useState(false);
  return(
    <div>
      <style jsx>{`
          .danceCarrot {
            width: 40px;
          }
          `}</style>
        <div style={month}>
          <h2 style={monthTitle}><img className="danceCarrot" src={dancingCarrot}></img>Month - {props.month}
            <img className="danceCarrot" src={dancingCarrot}></img>
          </h2>
          <ul style={produceSelection}>- Available Selection -
            {props.selection.map(function(item, index){
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }

  Produce.propTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.array.isRequired
  }

  export default Produce;
