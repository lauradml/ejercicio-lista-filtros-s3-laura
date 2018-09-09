import React from 'react';

class Search extends React.Component {
  render(){
    return (
      <div className="filter-item">
        <input type="text" id="f-title" name="f-title" onChange={this.props.filterName} placeholder="Search"/>
        <select name="f_language" id="f_language" value={this.props.language} onChange={this.props.filterLanguage}>
          <option value="">elige lenguaje</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Shell">Shell</option>
        </select>
      </div>

    );
  }
}

export default Search;
