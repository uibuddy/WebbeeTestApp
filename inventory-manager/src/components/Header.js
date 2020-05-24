import React, {Fragment} from 'react';
import {handleCollaspe} from '../utility/actions';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collapse:false
        }
    }
    renderInventoryName=(inventoryDetails)=>{
      let result = inventoryDetails.filter(function (item) {
        var key = item.InventoryName;
        if (!this[key]) {
            this[key] = true;
            return true;
        }
    }, Object.create(null));
        return result.map((item,i) => {
             return (
                     <li className="nav-item" key={i}>
                        <a className="nav-link" href="#" onClick={()=>this.props.filterInverntory(item.InventoryName)}>{item.InventoryName}</a>
                    </li>
                );                     
            });
         }
    loadInvenstoryDetails=()=>{
       this.props.viewInventory();
    }
    handleNavToggle=()=>{
        this.setState({
            collapse:!this.state.collapse
        })
    }
    render(){
        return(
            <div className="item-card">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Objectors:</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" onClick={(e)=>this.handleNavToggle(e)}></span>
              </button>
              
                <div className={this.state.collapse?"navbar-collapse":"collapse navbar-collapse"} id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#" onClick={()=>this.props.filterInverntory("All")} >View All <span className="sr-only">(current)</span></a>
                    </li>
                    {this.props.inventoryDetails&&this.renderInventoryName(this.props.inventoryDetails)}                   
                    <li className="nav-item dropdown show">
                      <a className="nav-link dropdown-toggle" onClick={handleCollaspe} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Manage Types</a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 d-none">                    
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Inventory</button>
                  </form>
                </div>
              </nav>
            </div>
        );
    }

}
export default Header;