import React, {useCallback, useState} from "react";
import {useRouter} from "next/router";
const TestForm = () => {
  const router = useRouter();
  const [link,setLink] = useState('');
  const [upload_date,setUpload_date] = useState('');
  const [total_len,setTotal_len] = useState('');
  const changeSetTestUserUrl = (e: any)=>{
    setLink(e.target.value);
    localStorage.setItem('link',e.target.value);
  }
  const changeSetTestUserDate = (e:any)=>{
    setUpload_date(e.target.value);
    localStorage.setItem('upload_date',e.target.value);
    }

  const changeSetTestUserLen = (e:any)=>{
    setTotal_len(e.target.value);
    localStorage.setItem('total_len',e.target.value);
    }

  const submithandler= useCallback((e:any)=>{
    e.preventDefault();
    const formData = new FormData();
    const link = localStorage.getItem('link') as any;
    const upload_date = localStorage.getItem('upload_date') as any;
    const total_len = localStorage.getItem('total_len') as any;

    fetch("/api/flask" , {
      method: "POST",
      body: JSON.stringify({
        link,
        upload_date,
        total_len
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data: any) => {
      console.log(data);
      console.log(formData);
    })
      .catch((data:any) => {
        console.log(data);
        console.log(formData);
        alert("Wrong with your email or password");
      });

    router.push('/');
  },[]);
  return (
    <>
      <img src='./images/test_index.png' alt="index1"/>

      <div className="flex justify-end mr-80 ">
        <form onSubmit={submithandler}>
          <input type="text" onChange={changeSetTestUserUrl} />
          <input type="text" onChange={changeSetTestUserDate} />
          <input type="text" onChange={changeSetTestUserLen} />
          <div className="flex justify-end text-2xl m-2">
            <a
              className="group relative inline-block text-sm font-medium text-black-600 focus:outline-none focus:ring active:text-black-500"
              href="/download"
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0">
              </span>

              <span className="relative block border border-current bg-white px-6 py-2">
              <button onClick={submithandler}>SUBMIT</button>
              </span>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
export default TestForm;
