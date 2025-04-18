export default function Card(props) {
    return (
        <div className="car">
            <img className="pic" src={props.src}  alt={props.name} />
            <div className="abs">discount:{props.discount}%</div>
            <div>
            <div className="fon">Name: {props.name}</div>
            <div className="fon2">{props.quantity}</div>
            <div className="fon3">₹{props.price}</div>
            </div>
        </div>
    );
}
