import {useRouter} from "next/router";
import ServiceForm from "../../components/service/ServiceForm";
function NewPhoto(){
    const router =useRouter();
    async function addPhotoHandler(enteredPhotoData: any){
        const response = await fetch('/api/new_photo',{
            method: 'POST',
            body: JSON.stringify(enteredPhotoData),
            headers: {
                'Content-Type': 'application/json',
            }

        });
        const json = await response.json();
        console.log(json);
        router.push('/');
    }
    return <ServiceForm onAddPhoto={addPhotoHandler}/>
}
export default NewPhoto;