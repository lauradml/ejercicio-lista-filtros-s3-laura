import React from 'react';
import Repo from './Repo';

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
              <Repo item={item}/>
            </li>
          );
        })}
      </ul>

    );
  }
}

export default RepoList;
