import React, {Fragment} from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

class InventoryItemCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
          };
    }
    handleChange = (date) => {
        alert(date);
        this.setState({
          startDate: date
        });
      };
      handleCollaspe=(event)=>{
          if(event.target.nextSibling.classList.contains("active")){
            event.target.classList.remove("active");
            event.target.nextSibling.classList.remove("active");
          }else{
            event.target.nextSibling.classList.add("active");
            event.target.classList.add("active");
          }
      }
      removeInventory=(index)=>{
          this.props.deleteInventory(index);
      }
      renderCard=(inventoryDetails)=>{
       return inventoryDetails&&inventoryDetails.map((item,i) => {
           let items=item.fields;
            return (
                <div className="col-lg-3" key={i}>
                 
                    <h2 className="type-heading-mobile" onClick={this.handleCollaspe}>{item.objectType}</h2>

                    <div className="border p-3 content-block">
                    <div className="col-header-block">
                    {item.objectType +" - "+ item.objectTitle}
                            <span className="close a-link link" onClick={()=>this.removeInventory(i)}>x</span>
                    </div>
                    <div className="form-group">
                            <label htmlFor={'title'+i}>Model</label>
                            <input type="text" value={item.objectTitle} className="form-control" id={'title'+i} />
                    </div>
                    <div className="form-group">
                        <label htmlFor={'type'+i}>type</label>
                        <input type="text" value={items.type} className="form-control" id={'type'+i} />
                    </div>
                    <div className="form-group">
                        <label htmlFor={'grade'+i}>grade</label>
                        <input type="text" value={items.grade} className="form-control" id={'grade'+i} />
                    </div>
                    <div className="form-group">
                        <label htmlFor={'brand'+i}>brand</label>
                        <input type="text" value={items.brand} className="form-control" id={'brand'+i} />
                    </div>
                    <div className="form-group">
                        <label htmlFor={'bar'+i}>bar</label>
                        <input type="text" value={items.bar} className="form-control" id={'bar'+i} />
                    </div>
                    <div className="form-group">
                        <label htmlFor={'date'+i}>date</label>
                        <DatePicker selected={new Date(items.date)} id={'date'+i} className={"form-control custom-cal"}/>
                    </div>
                    </div>
                </div>)
              });
        }
    render(){
        console.log(this.props.inventoryDetails);
        return (
           
                <div className="item-card row">              
                    {this.props.inventoryDetails&&this.props.inventoryDetails.length>0?this.renderCard(this.props.inventoryDetails):<h2>No item in inventory</h2>}              
                </div>
            
          );
    }
}
export default InventoryItemCard;

