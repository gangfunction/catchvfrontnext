import React, { useReducer } from "react";
import UploadZone from "./UploadZone/UploadZone";

/**
 * 업로드에서 사용할 액션타입과 상태를 통한 리듀서 사용
 * @constructor
 */
const Upload = ()=> {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return {
          ...state,
          inDropZone: action.inDropZone,
        };
      case "ADD_FILE_TO_LIST":
        return {
          ...state,
          fileList: state.fileList.concat(action.files),
        };
      case "DELETE_FILE_LIST":
        return {
          ...state,
          fileList: state.fileList.filter(
            (data: any) => data.fileList !== action.fileList
          ),
        };
      default:
        return state;
    }
  };
  const initialState = {
    inDropZone: false,
    fileList: [],
    uniqueID: 0,
    active: false,
  };
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <main>
        <UploadZone data={data} dispatch={dispatch} />
      </main>
    </div>
  );
}
export default Upload;