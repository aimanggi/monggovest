import React from 'react';
import '../../assets/scss/components/dropdown/_dropdownidentitas.scss';

class Dropdown2 extends React.Component {
 
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
    return (
 <div className="dropdown22wrapper">
   <p className="dropdown22par">Jenis Identitas</p>
    <div className="dropdown22select-box--box">
     <div className="dropdown22select-box--container">
        <div className="dropdown22select-box--selected-item">
         { this.state.selectedItem.value }
        </div>
        <div className="dropdown22select-box--arrow"
             onClick={this.dropDown}>
         <div className={`${this.state.showItems ? 'dropdown22select-box--arrow-up' : 'dropdown22select-box--arrow-down'}`}/>
        </div> 
      </div>
       <div className="dropdown22select-box--items"
            style={{display: this.state.showItems ? 'block' : 'none'}}>
        {this.state.items.map(item => <div key={item.id}
                                          onClick={() => this.selectItem(item)}
                                          className={this.state.selectedItem === item ? 'selected' : ''}>
                                          { item.value }
                                      </div>)
        }
       </div>
    </div>
  <input type="hidden" name={this.state.name} value={this.state.selectedItem.id} onChange={this.props.mouse} />
 </div>
            )
          }
        }

    export default Dropdown2