import React from "react";
import urlData from "./urlData.json";
import Piechart from "../chart/Piechart";
const UrlListForm = () => {
  const urlsCount = urlData.urls.length as any;
  const urlTotalCount = urlData.total_inspected_video_count as any;
  return (
    <>
      <div className="flex h-32 text-xl">
        <div>
          Total Count:  {urlTotalCount}
        </div>
        <div>
          Detected Count:{urlsCount}
        </div>
        <Piechart inspected={urlTotalCount} detected={urlsCount}/>


      </div>
      {urlData.urls.map((file: any) => {
        return (
          <a className=" group" key={file.url}>
            <ol key={file.url}>
              <li>
                <div className=" flex h-auto justify-between mt-1 transition bg-white border-2 border-black group-hover:-translate-x-2  p-1">
                  <div className=" font-bold text-xl sm:text-l">
                    <p>
                      URL: {file.url}                       PlatForm: {file.platform}

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
