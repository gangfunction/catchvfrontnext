import {useState} from "react";
import DatePicker, {CalendarContainer} from "React-Datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateSelect = () => {
  const [startDate, setStartDate] = useState(new Date()) as any;
  const DateSelectHandler = ()=>{
    localStorage.setItem("startDate",startDate);
    console.log(startDate);
  }
  return (
    <DatePicker
      closeOnScroll={true}
      selected={startDate}
      onInputClick={DateSelectHandler}
      onChange={(date:Date) => setStartDate(date)} />
  );
}
  export default DateSelect;