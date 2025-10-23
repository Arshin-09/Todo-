import { useState } from "react";

const Input = (props) =>{
  const [titleText,setTitleText] =useState('');
  const handlechange = (e)=>{
    setTitleText(e.target.value);
  }
  const [detailText,setDetailText] =useState('');
  const DetailChange = (e) =>{
    setDetailText(e.target.value);
  }
  const [selectedDate, setSelectedDate] = useState('');
    const DateChange = (e) =>{
      setSelectedDate(e.target.value);
    }
    const handleAdd = () => {
    if (titleText !== "" && detailText !== "" && selectedDate !== "") {
      props.addList(titleText, detailText, selectedDate);
      setTitleText("");
      setDetailText("");
      setSelectedDate("");
    }
  };
  return (
    <div className="container">
      <div className="input_container">
        <input type="text" className="input" placeholder="type Title of task"
        value={titleText} onChange={handlechange} />
      </div>
      <div className="input_container">
        <input type="text" className="input" placeholder="Detail of your task" 
        value={detailText} onChange={DetailChange}/>
      </div>
      <div className="input_container">
        <input type="date" className="input" value={selectedDate}
        onChange={DateChange} />
      </div>
      <div>
        <button 
        onClick={handleAdd}>+</button>
      </div>
    </div>
  )
}
export default Input ;