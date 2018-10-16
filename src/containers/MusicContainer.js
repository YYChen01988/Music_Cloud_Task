import React from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';


class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      musics:[],
      currentmusic: null
    };
    this.handleMusicSelected = this.handleMusicSelected.bind(this);
  }
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=50/json'
    fetch(url)
    .then((res) => res.json())
    .then((musics) => {
      this.setState({musics: musics});
    })

  }

  handleMusicSelected(index){
    const music = this.state.musics.feed.entry[index];
    this.setState({currentMusic: music});
  }

  render(){
    return (
      <div>
        <h1> Music Cloud</h1>
        <MusicSelector musics = {this.state.musics} onMusicSelected={this.handleMusicSelected}/>
        <MusicDetail music={this.state.currentMusic}/>
      </div>
    );
  }



}

export default MusicContainer;
