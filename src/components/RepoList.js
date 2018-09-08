import React from 'react';

class RepoList extends React.Component {
  render(){
    return (
      <ul className="app__list">
        {this.props.repos.map((item, index)=>{
          return (
            <li className="app__item" key={index}>
              <h2>{ item.name}</h2>
              <p>{item.description}</p>
              <p>{item.language}</p>
             </li>
          );
        })}
      </ul>

    );
  }
}

export default RepoList;
