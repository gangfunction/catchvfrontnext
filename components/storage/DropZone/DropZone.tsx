import React, {useCallback, useState} from "react";
import styles from './DropZone.module.css'
import UploadForm from "../UploadForm/UploadForm";


function noMoving(e: Event) {
    //새로고침 방지
    e.preventDefault();
    //부모 컴포넌트의 리밸류에이션 방지
    e.stopPropagation();
}

const DropZone = ({data, dispatch}: any) => {
    const handleDragEnter = (e: Event) => {
        noMoving(e);
        dispatch({type: "SET_IN_DROP_ZONE", inDropZone: true});
    };

    const handleDragLeave = (e: Event) => {
        noMoving(e);
        dispatch({type: "SET_IN_DROP_ZONE", inDropZone: false});
    };

    const handleDragOver = (e: any) => {
        noMoving(e);
        e.dataTransfer.dropEffect = "copy";
        dispatch({type: "SET_IN_DROP_ZONE", inDropZone: true});
    };

    const handleDrop = (e: any) => {
        noMoving(e);
        let files = [...e.dataTransfer.files];
        if (files && files.length > 0) {
            const existingFiles = data.fileList.map((f: any) => f.name);
            files = files.filter((f) => !existingFiles.includes(f.name));

            dispatch({type: "ADD_FILE_TO_LIST", files});
            dispatch({type: "SET_IN_DROP_ZONE", inDropZone: false});
        }
    };

    const handleFileSelect = (e: any) => {
        let files = [...e.target.files];

        if (files && files.length > 0) {
            const existingFiles = data.fileList.map((f: any) => f.name);
            files = files.filter((f) => !existingFiles.includes(f.name));

            dispatch({type: "ADD_FILE_TO_LIST", files});
        }
    };
    const uploadFiles = async () => {
        let files = data.fileList;
        const formData = new FormData();
        files.forEach((file: any) => formData.append("files", file));

        const response = await fetch("/api/upload", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData,
        }).then(function (response: any) {
            return response.json();
        }).then(function (data: any) {
            // location.href = "메인페이지 전환"
        }) as any;
        if (response.ok) {
            alert("Files uploaded successfully");
        } else {
            alert("Error uploading files");
        }
    };


    return (
        <>
                <div
                    className={styles.dropzone}
                    onDragEnter={(e: any) => handleDragEnter(e)}
                    onDragOver={(e: any) => handleDragOver(e)}
                    onDragLeave={(e: any) => handleDragLeave(e)}
                    onDrop={(e: any) => handleDrop(e)}
                >

                    <input
                        id="fileSelect"
                        type="file"
                        multiple
                        className={styles.files}
                        onChange={(e: any) => handleFileSelect(e)}
                    />
                    <label htmlFor="fileSelect">Select Files</label>
                    <h3 className={styles.uploadMessage}>
                        or drop your files here
                    </h3>
                </div>
                <UploadForm fileData={data}/>
                {data.fileList.length > 0 && (
                    <button type="submit"
                            className="m-3"
                            onClick={uploadFiles}
                    >

                        Upload
                    </button>
                )}

        </>
    );
};

export default DropZone;