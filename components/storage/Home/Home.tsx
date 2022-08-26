import React, {useReducer} from "react";
import styles from "./Home.module.css";
import DropZone from "../DropZone/DropZone";

export default function Home() {
    const reducer = (state:any, action:any) => {
        switch (action.type) {
            case "SET_IN_DROP_ZONE":
                return { ...state, inDropZone: action.inDropZone };
            case "ADD_FILE_TO_LIST":
                return { ...state, fileList: state.fileList.concat(action.files) };
            default:
                return state;
        }
    };

    const [data, dispatch] = useReducer(reducer, {
        inDropZone: false,
        fileList: [],
    });
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <DropZone  data={data} dispatch={dispatch} />
            </main>

            <footer className={styles.footer}>
                <div>{new Date().getFullYear()}</div>
            </footer>
        </div>
    );
}