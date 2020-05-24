const handleCollaspe=(event)=>{
    if(event.target.nextSibling.classList.contains("show")){
      event.target.classList.remove("show");
      event.target.nextSibling.classList.remove("show");
    }else{
      event.target.nextSibling.classList.add("show");
      event.target.classList.add("show");
    }
}
export {handleCollaspe}