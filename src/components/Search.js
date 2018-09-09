import React from 'react';

class Search extends React.Component {
  render(){
    return (
      <div className="filter-item">
        <input type="text" id="f-title" name="f-title" onChange={this.props.filterName} placeholder="Search"/>
      </div>

    );
  }
}

export default Search;
