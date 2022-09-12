import React, {useState} from "react";
import urlData from "./urlData.json";
import Piechart from "../chart/Piechart";
const UrlListForm = () => {
  const [show,setShow]= useState(false);
  const ArrayResult = localStorage.getItem('result') as any;
  const updateResult = ArrayResult.replaceAll("[","");
  const updatedResult = updateResult.replaceAll("]","");
  const finalList= JSON.parse(updatedResult);
  const urlsCount = finalList.videoCount as any;
  const urlTotalCount = finalList.detectCount as any;
  let urlList = finalList.urlList.split(',') as any;
  const requestFiles = ()=>{
    fetch("http://localhost:8080/image/request",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: localStorage.getItem("userEmail"),
      }),
    }).then((res: any)=>{
      if(res.ok){
        return res.json();
      }else{
        return alert("Error: "+ res);
      }
    }) .then((json)=>{
      localStorage.setItem("result", JSON.stringify(json));
      console.log(JSON.stringify(json));
      console.log(typeof json);
      setShow(true);
      console.log(urlList);

    });
  }
  return (
    <>
      <button
        type="submit"
        onClick={requestFiles}
        className="relative inline-block group focus:outline-none focus:ring"
      >
          <span
            className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span
          className="relative inline-block px-6 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-0">
            Result Check
          </span>
      </button>
      {show &&
        <div className="flex h-32 text-xl">
          <div>
            Total Count: {urlTotalCount}
          </div>
          <div>
            Detected Count:{urlsCount}
          </div>
          <Piechart inspected={urlTotalCount} detected={urlsCount}/>


        </div>
      }
      {show && urlList.map((i: any) => {
        return (
          <a className=" group" key={urlList[i]}>
            <ol key={urlList[i]}>
              <li>
                <div className=" flex h-auto justify-between mt-1 transition bg-white border-2 border-black group-hover:-translate-x-2  p-1">
                  <div className=" font-bold text-xl sm:text-l">
                    <p>
                      URL: {i}

                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </a>
        );
      })
      }
    </>
  );
};
export default UrlListForm;
