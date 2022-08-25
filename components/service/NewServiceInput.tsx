import ServiceForm from "./ServiceForm";

function NewServiceInput(){
    function addPhotoHandler(enteredPhotoData : any){
        console.log(enteredPhotoData);
    }
    return(
        <>
            <ServiceForm onAddPhoto={addPhotoHandler}/>
        </>
    )
}
export default NewServiceInput;