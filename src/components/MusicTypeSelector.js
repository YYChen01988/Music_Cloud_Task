import React from 'react';

const MusicTypeSelector = (props) => {

  function handleChange(event){
    // console.log(event.target.value);
    props.onMusicTypeSelected(event.target.value);
  }

  if(!props.musics.feed) return null;
  const options = props.musics.feed.entry.map((song, index) => {
    return <option key={index} value={index}>{song["im:name"].label}</option>
  })

  return (
    <select id="music-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a music...</option>
      {options}
    </select>
  )
}

export default MusicTypeSelector;
