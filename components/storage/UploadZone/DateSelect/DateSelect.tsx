import {useState} from "react";
import DatePicker from "React-Datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateSelect = () => {
  const [startDate, setStartDate] = useState(new Date()) as any;
  const startDateHandler = (date:any)=>{
    setStartDate(date);
    if(localStorage.getItem("startDate")){
      localStorage.removeItem("startDate");
      localStorage.setItem("startDate", date);
      console.log(date);
    }else{
      localStorage.setItem("startDate",date);
      console.log(date);
    }

  }
  return (
    <DatePicker
      closeOnScroll={true}
      selected={startDate}
      onChange={(date:Date)=>startDateHandler(date)} />
  );
}
  export default DateSelect;