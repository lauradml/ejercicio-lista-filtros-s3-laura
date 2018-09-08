import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import RepoDetail from'./components/RepoDetail';

const url='https://api.github.com/orgs/Adalab/repos';

class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    repos: [],
    name:'',
    description:'',
    language:''
  }

}
componentDidMount() {
this.getRepos();
}
getRepos() {
fetch(url)
  .then(response => response.json())
  .then(data => {
    this.setState({
    repos: data
    });
  });
}

  render() {
    return (
      <div className="App">
        <Home
        repos={this.state.repos}
        name={this.state.name}
        description={this.state.description}
        language={this.state.languaje
        }/>
      </div>
    );
  }
}

export default App;
