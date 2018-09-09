import React from 'react';
import RepoList from './RepoList';
import Search from './Search';


class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
        <header className="app-header">
          <h1 className='title'>Repos at Adalab in Github</h1>
          <Search filterName={this.props.filterName}/>
        </header>
        <RepoList
        repos={this.props.repos}
        name={this.props.name}
        description={this.props.description}
        language={this.props.language}
        filterName={this.props.filterName}
        />

    </React.Fragment>

    );
  }
}

export default Home;
