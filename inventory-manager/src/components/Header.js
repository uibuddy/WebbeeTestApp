import React, {Fragment} from 'react';


class Header extends React.Component{
    constructor(props){
        super(props);
        
    }
    renderInventoryType=(inventoryDetails)=>{
        return inventoryDetails.map((item,i) => {
             return (
                 <div className="header-item" key={i}>
                    <h5>{item.objectType}</h5>
                </div>
                );                     
            });
         }
    loadInvenstoryDetails=()=>{
       this.props.viewInventory();
    }
    render(){
        
        return(
            <div className="item-card">
                <div className="row type-heading-desktop">
                     <h5>Objectors:</h5>
                     <div className="header-item">
                        <h5 onClick={this.loadInvenstoryDetails}>All</h5>
                    </div>
                     {this.props.inventoryDetails&&this.renderInventoryType(this.props.inventoryDetails)}
                    <div className="header-item">
                        <h5>Manage Types</h5>
                    </div>
                </div>
            </div>
        );
    }

}
export default Header;