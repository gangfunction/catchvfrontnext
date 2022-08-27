import React from "react";

const UploadForm = ({fileData}: any) => {

    return (
        <>
            {fileData.fileList.map((file: any) => {
                return (
                    <ol key={file.name}>
                        <li className="flex m-1 p-1" >
                            {file.name}
                        </li>
                    </ol>
                );
            })}
        </>
    );
}
export default UploadForm;