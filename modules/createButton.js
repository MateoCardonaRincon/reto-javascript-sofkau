const createButton = (id, value, position) => {
    let thisBtn = document.createElement("input");
    thisBtn.setAttribute("type", "button");
    thisBtn.setAttribute("id", id);
    thisBtn.setAttribute("value", value);
    thisBtn.setAttribute("class", "buttons");
    document.getElementById(position).appendChild(thisBtn);
    return thisBtn;
  };

  export default createButton;