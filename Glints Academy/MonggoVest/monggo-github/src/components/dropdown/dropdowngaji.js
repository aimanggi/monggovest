  import React from 'react';
  import '../../assets/scss/components/dropdown/_dropdowngaji.scss';

class Dropdown1 extends React.Component {
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
    return (<div className="mvfddddgwrapper">

      <p className="mvfddddgpar">Kategori</p>
      <div className="mvfddddgselect-box--box">
      <div className="mvfddddgselect-box--container">
      <div className="mvfddddgselect-box--selected-item">
      { this.state.selectedItem.value }
      </div>
      <div
      className="mvfddddgselect-box--arrow"
      onClick={this.dropDown}
      ><div className={`${this.state.showItems ? 'mvfddddgselect-box--arrow-up' : 'mvfddddgselect-box--arrow-down'}`}/></div> 
      </div>
      <div
      className="mvfddddgselect-box--items"
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

    export default Dropdown1