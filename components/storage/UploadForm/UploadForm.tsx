import React from "react";

const UploadForm = ({ fileData }: any) => {
  return (
    <>
      {fileData.fileList.map((file: any) => {
        return (
          <a className=" group" key={file.name}>
            <ol key={file.name}>
              <li>
                <div className=" flex  justify-between mt-1 transition bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-1xl  group-hover:shadow-[4px_4px_0_0_#000] p-1">
                  <div className="flex justify-between lg:group-hover:opacity-0 lg:group-hover:absolute">
                    <div className=" font-bold sm:text-sm">{file.name}</div>
                  </div>
                </div>
              </li>
            </ol>
          </a>
        );
      })}
    </>
  );
};
export default UploadForm;
