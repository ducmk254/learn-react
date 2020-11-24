import React from 'react';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleInStockOnlyChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        ></input>
        <p>
          <input
            type="checkbox"
            onChange={this.handleInStockOnlyChange}
            checked={this.props.inStockOnly}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
export default SearchBar;
