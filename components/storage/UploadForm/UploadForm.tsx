import React from "react";
import styles from './UploadForm.module.css';
const UploadForm = ({ fileData }:any) =>
    (
        <div className={styles.fileList}>
            <div className={styles.fileContainer}>
                {fileData.fileList.map((f: any) => {
                    return (
                        <>
                            <ol>
                                <li key={f.lastModified} className={styles.fileList}>
                                    <div key={f.name} className={styles.fileName}>
                                        {f.name}
                                    </div>
                                </li>
                            </ol>
                        </>
                    );
                })}
            </div>
        </div>
    );

export default UploadForm;