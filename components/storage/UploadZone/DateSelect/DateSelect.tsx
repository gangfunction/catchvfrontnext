import {useState} from "react";
import DatePicker from "React-Datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateSelect = () => {
  const [startDate, setStartDate] = useState(new Date()) as any;
  /** 선택한 날짜를 쿠키에 추가해주는 함수*/
  const DateSelectHandler = ()=>{
    /**
     * 만약 localStorage.getItem에 데이트가 이미 존재한다면 삭제하고 현재 선택한 값을 추가해준다.
     * 그것이 아니라면 localStorage.setItem으로추가해준다.
     */
  }
  const startDateHandler = (date:any)=>{
    setStartDate(date);
    if(localStorage.getItem("startDate")){
      localStorage.removeItem("startDate");
      localStorage.setItem("startDate", date)
    }else{
      localStorage.setItem("startDate",date);
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