import React, {useState} from "react";
import styles from "./UploadZone.module.css";
import UploadForm from "../UploadForm/UploadForm";
import {useRouter} from "next/router";
import imageCompression from "browser-image-compression";
import DateSelect from "./DateSelect/DateSelect";

/**
 *  e.preventDefault()는 새로고침을 방지하기위한 함수이고,
 *  e.stopPropagation()는 부모컴포넌트의 재평가를 방지하기위한 함수이다.
 */
function noMoving(e: Event) {
  e.preventDefault();
  e.stopPropagation();
}

/**
 * 업로드존에서 일어나는 행위들을 보여주는 함수
 */
const UploadZone = ({data, dispatch}: any) => {
  const [upload, setUploaded] = useState(false);
  const [datepick, setDatePick] = useState(false);
  const router = useRouter();
  /**
   * 업로드 존에 들어왔을때 나타나는 상태전환을 해주는 함수이다.
   * @param e
   */
  const handleDragEnter = (e: Event) => {
    noMoving(e);
    dispatch({type: "SET_IN_DROP_ZONE", inDropZone: true});
  };
  /**
   * 업로드존에서 나갈때 나타나는 상태전환을 해주는 함수이다.
   * @param e
   */
  const handleDragLeave = (e: Event) => {
    noMoving(e);
    dispatch({type: "SET_IN_DROP_ZONE", inDropZone: false});
  };
  /**
   * 업로드 존 위에 드래깅 상태로 존재할때 나타내는 함수이다.
   * @param e
   */
  const handleDragOver = (e: any) => {
    noMoving(e);
    e.dataTransfer.dropEffect = "copy";
    dispatch({type: "SET_IN_DROP_ZONE", inDropZone: true});
  };
  /**
   * 업로드 존위에 드래깅 액션을 그만둘때 나타내는 함수이다.
   * @param e
   */
  const handleDrop = (e: any) => {
    noMoving(e);
    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f: any) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      dispatch({type: "ADD_FILE_TO_LIST", files});
      dispatch({type: "SET_IN_DROP_ZONE", inDropZone: false});
      setUploaded(true);

    }
  };
  /**
   * 업로드존에 들어온 파일들을 리스트형식으로 표시해주는 함수이다.
   * @param e 이벤트가 선택될 경우 선택한 파일들을 매핑해준다.
   */
  const handleFileSelect = (e:any) => {
    let files = [...e.currentTarget.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f: any) => f.name);
      files = files.filter((f: any) => !existingFiles.includes(f.name));

      dispatch({type: "ADD_FILE_TO_LIST", files});
    }
    setUploaded(true);

  };
  /**파일 리스트를 삭제할때 사용하는 함수*/
  const handleFileDelete = () => {
    const files = data.fileList;
    if (files && files.length > 0) {
      dispatch({type: "DELETE_FILE_LIST", files});
    }
    setUploaded(false);
  };
  /** 파일 업로드할때 사용되는 함수*/
  const uploadFiles = async () => {
    let files = data.fileList;
    const formData = new FormData();
    files.forEach((file: any) => formData.append("files", file));
    const userEmail = localStorage.getItem("userEmail") as any;
    const startDate = localStorage.getItem("startDate") as any;
    formData.append("email", userEmail);
    formData.append("startDate", startDate);
    console.log(formData.get("email"));


    const response = (await fetch("http://localhost:8080/image/api", {
      method: "POST",
      headers: {},
      body: formData,
    }).then(() => {
      if (response) {
        if (response.status === 200) {
          alert("Files uploaded successfully");
        } else {
          alert(response.status);
        }
      }
      router.push('/');
    })) as any;

  };
  /**
   * 파일들의 용량의 총합을 계산해주고,
   * toPrecision으로 mb단위의 소숫점 2자리까지 표현해준다.
   */
  const fileSizeCalculator = () => {
    let result = 0;
    for (let i = 0; i < data.fileList.length; i++) {
      result += data.fileList[i].size
    }
    return (result / 1000000).toPrecision(2);
  }
  /**
   * 이미지를 압축할때 쓰는 함수이다.
   */
  const compressHandler = async () => {
    if (data.fileList.length > 0) {
      const options = {
        maxSizeMB: 0.6,
        maxWidthOrHeight: 1920
      }
      for (let i = 0; i < data.fileList.length; i++) {
        try {
          data.fileList[i] = await imageCompression(data.fileList[i], options);
        } catch (e) {
          console.log(e);
        }
      }

    }
    /**
     * 파일압축이 성공했을때 나타내는 메시지,
     * 후에 서비스 페이지로 리다이렉션 해준다.
     */
    alert("File Compression Completed!")
    await router.push('/service')
  }
  /**
   * 날짜선택이 이루어진 경우 하위컴포넌트에서 호출되어
   * setDatePick을 true로 변환해준다.
   */
  const dateFunction = ()=>{
    setDatePick(true);
  }


  return (
    <>
      {upload &&<div className="flex flex-col  content-center ">
        <span className="font-mono text-2xl ">
          Please Select Start Date
        </span>
        <DateSelect propFunction={dateFunction}/>
      </div>}
      {!upload &&<div
        className={styles.dropzone}
        onDragEnter={(e: any) => handleDragEnter(e)}
        onDragOver={(e: any) => handleDragOver(e)}
        onDragLeave={(e: any) => handleDragLeave(e)}
        onDrop={(e: any) => handleDrop(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <input
          accept="image/gif, imgage/jpeg, image/png"
          id="fileSelect"
          type="file"
          multiple
          className={styles.files}
          onChange={(e: any) => handleFileSelect(e)}
        />
        <label htmlFor="fileSelect">Select Files</label>
        <h3 className={styles.uploadMessage}>or drop your files here</h3>
      </div>
      }


      {upload && <UploadForm fileData={data} onRemoveList={handleFileDelete}/>
      }
      <button onChange={() => fileSizeCalculator}
              className=" relative inline-block px-6 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-0">
        Total File Size
        <p>
          {fileSizeCalculator()} MB
        </p>
      </button>
      <button
        onClick={compressHandler}
        onChange={fileSizeCalculator}
        className="relative inline-block group focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span
          className="relative inline-block px-6 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-0">
            Compress File
          </span>
      </button>


      {data.fileList.length > 0 && (
        <button
          type="submit"
          onClick={handleFileDelete}
          className="relative inline-block group focus:outline-none focus:ring"
        >
          <span
            className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span
            className="relative inline-block px-6 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-0">
            DeleteFileList
          </span>
        </button>
      )}
      {data.fileList.length >0 && datepick &&(
        <button
          type="submit"
          onClick={uploadFiles}
          className=" relative inline-block group focus:outline-none focus:ring"
        >
          <span
            className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span
            className=" relative inline-block px-6 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-0">
            Upload
          </span>
        </button>
      )}



    </>
  );
};

export default UploadZone;
