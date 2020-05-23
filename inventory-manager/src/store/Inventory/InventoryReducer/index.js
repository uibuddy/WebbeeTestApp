import {VIEW_ALL, ADD_TYPE, EDIT_TYPE , DELETE_TYPE } from "../actionTypes";
import inventoryInitialState from "../InventoryInitialState";

export default function inventoryReducer(state = inventoryInitialState, action){
    switch(action.type){
        case VIEW_ALL:{
            return Object.assign(state, action.viewAll);
        }
        case DELETE_TYPE:{            
            var newState=state;
            if(state.length>1){
                newState = state.splice(action.inventoryIndex, 1);
            }else{
                newState=[];
            }
            return newState;
        }
        default:
        return inventoryInitialState;
    }
}

export {inventoryReducer}