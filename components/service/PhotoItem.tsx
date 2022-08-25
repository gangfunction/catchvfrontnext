import {useRouter} from "next/router";

function PhotoItem (props:any){
    const router = useRouter();
    function showDetailsHandler(){
        router.push('/'+props.id);
    }
    return(
        <>
            <div>
                <img src={props.image} alt={props.id}/>
            </div>
            <div>
                <h3>{props.uuid}</h3>
            </div>
            <button onClick={showDetailsHandler}>Show Photo</button>
        </>
    )
}
export default PhotoItem;