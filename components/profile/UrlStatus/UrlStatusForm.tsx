import React, {useEffect, useState} from "react";
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
      localStorage.setItem("result", json[0]);
      localStorage.setItem("urlTotalCount",json[0]["videoCount"]);
      localStorage.setItem("urlsCount",json[0]["detectCount"]);
      localStorage.setItem("urlList",json[0]["urlList"])
      console.log(json[0]['urlList']);
      console.log(localStorage.getItem("urlList"));
      console.log(Array(localStorage.getItem("urlList"))[0]);
      const newarray= localStorage.getItem("urlList").split(",") as any;
      console.log(newarray);
      localStorage.setItem("newarray", newarray);
      console.log(json[0]);
      setShow(true);


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
          <a className=" group" key={Array(localStorage.getItem('newarray'))[i]}>
            <ol key={Array(localStorage.getItem('newarray'))[i]}>
              <li>
                <div
                  className=" flex h-auto justify-between mt-1 transition bg-white border-2 border-black group-hover:-translate-x-2  p-1">
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
