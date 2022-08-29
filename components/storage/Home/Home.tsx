import React, {useReducer, useState} from "react";
import DropZone from "../DropZone/DropZone";

export default function Home() {
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
                    fileList: state.fileList.filter((data:any) => data.fileList !== action.fileList),
                }
            default:
                return state;
        }
    };
    const initialState = {
        inDropZone: false,
        fileList: [],
        uniqueID: 0,
        active: false
    }
    const [data, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <main>
                <DropZone data={data} dispatch={dispatch}/>
            </main>
            <footer>
            </footer>
        </div>
    );
}