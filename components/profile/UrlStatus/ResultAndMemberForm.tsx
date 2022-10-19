import React, {useState} from "react";
import PasswordChangeForm from "../../member/PasswordChangeForm";

const ResultAndMemberForm = () => {
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
      // @ts-ignore
      const tmpArray= localStorage!.getItem("urlList").replace("[","")
      const tmp2Array = tmpArray.replace("]","");
      localStorage.setItem("newarray", tmp2Array);
      setShow(true);


    });
  }
  const toggleHandler = ()=>{
    if (show){
      setShow(false);
    }
  }
  return (
    <>
      <div className="flex justify-between">
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
      <button
        type="submit"
        onClick={toggleHandler}
        className="relative inline-block group focus:outline-none focus:ring"
      >
          <span
            className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span
          className="relative inline-block px-6 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-0">
            Password Change
          </span>
      </button>
      </div>

      {show &&
          <div className="grid  grid-cols-2 h-auto text-2xl font-mono w-auto text-center">
              <span className="p-3">
                  Detected Count:{localStorage.getItem('urlsCount')}

              </span>

          </div>
      }

      {show && (localStorage!.getItem("newarray")!.split(",")).map((url:any) => {

        return (
          <a className=" group" key={url}>
            <ol key={url}>
              <li>
                <div
                  className=" flex h-auto justify-between mt-1  bg-white border-2 border-black  p-1">
                  <div className=" font-bold text-xl sm:text-l">
                    <p>
                      {url}
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </a>
        );
        })}
      {!show &&<PasswordChangeForm />}

    </>
  );
};
export default ResultAndMemberForm;
