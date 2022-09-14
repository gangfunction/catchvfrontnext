import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * 날짜를 선택하는 함수이다.
 * @param props 를 통해서 날짜를 선택했다는 것을 반환해준다.
 */
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
  /**
   * 날짜를 선택하는것을 상위 컴포넌트로 반환해준다.
   */
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