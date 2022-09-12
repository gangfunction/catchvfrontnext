import React, {useState} from "react";
import Piechart from "../chart/Piechart";

const UrlListForm = () => {
  const [show, setShow] = useState(false);

  const requestFiles = () => {
    fetch("http://localhost:8080/image/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: localStorage.getItem("userEmail"),
      }),
    }).then((res: any) => {
      if (res.ok) {
        return res.json();
      } else {
        return alert("Error: " + res);
      }
    }).then((json) => {
      localStorage.setItem("urlTotalCount",json[0]["videoCount"]);
      localStorage.setItem("urlsCount",json[0]["detectCount"]);
      localStorage.setItem("urlList",json[0]["urlList"])
      console.log(localStorage.getItem("urlList"));
      const tmpArray= localStorage.getItem("urlList").replace("[","")
      const tmp2Array = tmpArray.replace("]","");
      let array = tmp2Array.split(",");
      console.log(array)
      console.log(Array.isArray(array));
      for(let i=0; i<array.length; i++){
        console.log(array[i])
      }
      // @ts-ignore
      localStorage.setItem("newarray", array);
      setShow(true);
      console.log(localStorage.getItem("newarray"));


    });
  }
  // @ts-ignore
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
                  Total Count: {localStorage.getItem('urlTotalCount')}
              </div>
              <div>
                  Detected Count:{localStorage.getItem('urlsCount')}
              </div>
              <Piechart inspected={localStorage.getItem('urlTotalCount')} detected={localStorage.getItem('urlsCount')}/>


          </div>
      }

      {show && Array(localStorage.getItem('newarray')).map((i: any) => {
        return (
          <a className=" group" key={localStorage.getItem('newarray').split(',')[i]}>
            <ol key={localStorage.getItem('newarray').split(',')[i]}>
              <li>
                <div
                  className=" flex h-auto justify-between mt-1  bg-white border-2 border-black  p-1">
                  <div className=" font-bold text-xl sm:text-l">
                    <p>
                      {i}
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
