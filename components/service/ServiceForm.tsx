import {useRef} from "react";

function ServiceForm(props:any){
    const idInputRef= useRef() as any;
    const imageInputRef= useRef() as any;
    function submitHandler(event:any){
        event.preventDefault();
        const enteredId= idInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const photoData= {
            id: enteredId,
            image: enteredImage,
        }
        props.onAddPhoto(photoData);
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="id">Photo Id </label>
                    <input type="text" id="id" ref={idInputRef} />
                </div>
                <div>
                    <label htmlFor="image">Photo Image </label>
                    <input type="image" id="image" ref={imageInputRef} />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
export default ServiceForm;