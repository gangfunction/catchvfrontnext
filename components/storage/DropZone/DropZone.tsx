import React, { useCallback } from "react";
import styles from "./DropZone.module.css";
import UploadForm from "../UploadForm/UploadForm";

function noMoving(e: Event) {
  // 새로고침 방지
  e.preventDefault();
  // 부모 컴포넌트의 리밸류에이션 방지
  e.stopPropagation();
}

const DropZone = ({ data, dispatch }: any) => {
  const handleDragEnter = (e: Event) => {
    noMoving(e);
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDragLeave = (e: Event) => {
    noMoving(e);
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragOver = (e: any) => {
    noMoving(e);
    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (e: any) => {
    noMoving(e);
    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f: any) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      dispatch({ type: "ADD_FILE_TO_LIST", files });
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  const handleFileSelect = (e: any) => {
    let files = [...e.target.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f: any) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      dispatch({ type: "ADD_FILE_TO_LIST", files });
    }
  };
  const handleFileDelete = () => {
    const files = data.fileList;
    if (files && files.length > 0) {
      dispatch({ type: "DELETE_FILE_LIST", files });
    }
  };
  const uploadFiles = async () => {
    const files = data.fileList;
    console.log(data.fileList);
    console.log(data.constantId);
    const formData = new FormData();
    files.forEach((file: any) => formData.append("files", file));

    const response = (await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then(function (response: any) {
        return response.json();
      })
      .then(function () {
        // location.href = "메인페이지 전환"
      })) as any;
    if (response.ok) {
      alert("Files uploaded successfully");
    } else {
      alert("Error uploading files");
    }
  };
  useCallback((id: number): void => {
    data.fileList.filter((data: any) => data.id !== id);
  }, []);
  return (
    <>
      <div
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
      <UploadForm fileData={data} onRemoveList={handleFileDelete} />

      {data.fileList.length > 0 && (
        <button
          type="submit"
          onClick={uploadFiles}
          className="relative inline-block group focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative inline-block px-6 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-0">
            Upload
          </span>
        </button>
      )}
      {data.fileList.length > 0 && (
        <button
          type="submit"
          onClick={handleFileDelete}
          className="relative inline-block group focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative inline-block px-6 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-0">
            DeleteFileList
          </span>
        </button>
      )}
    </>
  );
};

export default DropZone;
