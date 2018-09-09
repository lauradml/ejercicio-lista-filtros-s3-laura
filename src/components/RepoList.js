import React from 'react';

class RepoList extends React.Component {
  render(){
    return (
      <ul className="app-list">
        {this.props.repos
          .filter(item => {
              return item.name.toLowerCase().includes(this.props.filterName);
            })
          .map(item=>{
          return (
            <li className="app-item" key={item.id}>
              <h2>{item.name}</h2>
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
