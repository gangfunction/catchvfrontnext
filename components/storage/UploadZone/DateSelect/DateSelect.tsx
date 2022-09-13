import {useState} from "react";
import DatePicker from "React-Datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = (props :any) => {
  const [startDate, setStartDate] = useState(new Date()) as any;
  const startDateHandler = (date: any) => {
    setStartDate(date);
    dateSetter();
    if (localStorage.getItem("startDate")) {
      localStorage.removeItem("startDate");
      localStorage.setItem("startDate", date);
      console.log(date +"if");
    } else {
      localStorage.setItem("startDate", date);
      console.log(date + "else");
    }
  }
  const dateSetter= ()=>{
    props.propFunction(startDate);
  }
  return (
    <DatePicker
      closeOnScroll={true}
      selected={startDate}
      withPortal
      portalId="root-portal"
      onChange={(date: Date) => {
        startDateHandler(date)
      }}/>

  );
}
export default DateSelect;