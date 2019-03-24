  import React from 'react';

import '../../assets/scss/components/dropdown/_dropdownsumberpenghasilan.scss';

class Dropdown4 extends React.Component {
  state = {
    ...this.props,
    items: this.props.items || [],
    selectedItem: this.props.items[0] || this.props.selectedItem,
    showItems: false,
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      showItems: false,
    })
  }

  render () {
    return (<div className="dropdown44wrapper">

      <p className="dropdown44par">Sumber Penghasilan</p>
      <div className="dropdown44select-box--box">
      <div className="dropdown44select-box--container">
      <div className="dropdown44select-box--selected-item">
      { this.state.selectedItem.value }
      </div>
      <div
      className="dropdown44select-box--arrow"
      onClick={this.dropDown}
      ><div className={`${this.state.showItems ? 'dropdown44select-box--arrow-up' : 'dropdown44select-box--arrow-down'}`}/></div> 
      </div>
      <div
      className="dropdown44select-box--items"
      style={{display: this.state.showItems ? 'block' : 'none'}}
      >
      {
        this.state.items.map(item => <div
        key={item.id}
        onClick={() => this.selectItem(item)}
        className={this.state.selectedItem === item ? 'selected' : ''}
        >
        { item.value }
        </div>)
      }
      </div>
      </div>
      <input type="hidden" name={this.state.name} value={this.state.selectedItem.id} />
      </div>
      )}
    }

    export default Dropdown4