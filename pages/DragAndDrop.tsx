import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebase from "firebase/compat/app";
import storage = firebase.storage;

const App = () => {
    const [files, setFileList] = useState([]); // 파일 리스트
    const [isUploading, setUploading] = useState(false); // 업로드 상태
    const [photoURL, setPhotosURL] = useState([]); // 업로드 완료된 사진 링크들
    const [progress, setProgress] = useState(0); // 업로드 진행상태

    const handleImageChange = (e: any) => {
        for (const image of e.target.files) {
            //@ts-ignore
            setFileList((prevState) => [...prevState, image]);
        }
    };

    const handleImageUpload = async (e:any, fileList:any) => {
        e.preventDefault();
        try {
            setUploading(true);
            const urls = await Promise.all(
                fileList?.map((file:any) => {
                    // @ts-ignore
                    const storageRef = ref(storage, `images/${file.name}`);

                    const task = uploadBytesResumable(storageRef, file);

                    task.on("state_changed", (snapshot) => {
                        setProgress(
                            Math.round(
                                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                            )
                        );
                    });
                    return getDownloadURL(storageRef);
                })
            ) as any;
            setPhotosURL(urls);
            alert("성공적으로 업로드 되었습니다");
        } catch (err) {
            console.error(err);
        }
        // 초기화
        setProgress(0);
        setUploading(false);
    };

    return (
        <div>
            <form onSubmit={(e) => handleImageUpload(e, files)}>
                <label>
                    파일:
                    <input
                        multiple
                        accept="image/*"
                        type="file"
                        onChange={handleImageChange}
                    />
                </label>
                <button type="submit">{isUploading ? "업로드중..." : "업로드"}</button>
            </form>
            {photoURL?.length > 0 && (
                <ul>
                    {photoURL.map((url, index) => (
                        <li key={index}>
                            <img
                                src={url}
                                alt="사용자 첨부 이미지"
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
