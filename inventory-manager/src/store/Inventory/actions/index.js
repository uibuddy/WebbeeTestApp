import {VIEW_ALL, ADD_TYPE, EDIT_TYPE , DELETE_TYPE } from "../actionTypes";

export function viewInventory(inventory){
    return{
        type:VIEW_ALL,
        inventory:inventory
    };
};
export function deleteInventory(inventory){
    return{
        type:DELETE_TYPE,
        inventoryIndex:inventory
    };
};
export default{
    viewInventory:viewInventory,
    deleteInventory:deleteInventory
}
