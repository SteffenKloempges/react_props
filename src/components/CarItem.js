const CarItem = (props) => {
    // Vanilla JS schreiben
    console.log(props);
    console.log(props.car);
    return (<div>
        <h2>{props.car}</h2>
        <h2>{props.carModel}</h2>
        <h2>{props.carYear}</h2>
        <img src={props.img} alt="" />
    </div>);
}

export default CarItem;