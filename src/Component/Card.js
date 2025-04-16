export default function Card(props) {
    return (
        <div className="car">
            <img src={props.src} height="200px" width="200px" alt={props.name} />
            <div className="abs">discount:{props.discount}%</div>
            <div>
            <div className="fon">Name: {props.name}</div>
            <div className="fon2">{props.quantity}</div>
            <div className="fon3">₹{props.price}</div>
            </div>
        </div>
    );
}
