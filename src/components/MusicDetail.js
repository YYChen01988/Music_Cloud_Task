import React from 'react';

const MusicDetail = (props) => {
  if(!props.music) return <p>Loading...</p>;
  return (
    <div>
      <img src={props.music["im:image"][2].label}></img>
      <ul>
        <li>Title: {props.music["im:name"].label}</li>
        <li>Artist: {props.music["im:artist"].label}</li>
        <li>Price: {props.music["im:price"].label}</li>
      </ul>
    </div>
  )
}

export default MusicDetail;
