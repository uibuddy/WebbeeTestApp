import React, {Fragment} from 'react';
import {viewInventory,deleteInventory} from '../store/Inventory/actions/index';
import InventoryItemCard from './InventoryItemCard';
import { VIEW_ALL, DELETE_TYPE } from '../store/Inventory/actionTypes/index';
import Header from './Header';
import { connect } from 'react-redux';
import '../style/home.css';
class App extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <Header inventoryDetails={this.props.inventoryDetails} viewInventory={this.props.viewInventory}/>
        <InventoryItemCard inventoryDetails={this.props.inventoryDetails} deleteInventory={this.props.deleteInventory}/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return { inventoryDetails: state }; 
};
const mapDispatchToProps=(dispatch)=>({
  viewInventory:(state, VIEW_ALL)=>dispatch(viewInventory(state, VIEW_ALL)),
  deleteInventory:(state, DELETE_TYPE, index)=>dispatch(deleteInventory(state, DELETE_TYPE, index)),
});
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
