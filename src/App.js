import axios from 'axios';
import PostItem from './components/PostItem';
import React from 'react';
import './styles/App.css';

class App extends React.Component {
  state = {details: []}
  
  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then(res => {
      data= res.data;
      this.setState({
        details: data
      })
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
        <header>hello bro</header>
        <hr></hr>
        {this.state.details.map((output, id) =>(
          <PostItem  post={{id: id, title:output.title, description:output.channel}}/>
        )) }
      </div>
    )
  }
}


export default App;
