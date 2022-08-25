function PhotoDetail(props: any) {
    return (
        <>
            <img src={props.image}
                 alt={props.id}/>
            <h1>{props.uuid}</h1>
        </>
    )
}

export default PhotoDetail;