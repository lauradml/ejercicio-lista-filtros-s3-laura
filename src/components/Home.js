import React from 'react';
import RepoList from './RepoList';
import Search from './Search';

class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
        <header className="app-header">
          <h1 className='title'>Repos at Adalab in Github</h1>
          <Search/>
        </header>
        <RepoList
        />
    </React.Fragment>

    );
  }
}

export default Home;
