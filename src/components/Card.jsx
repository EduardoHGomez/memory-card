import './../styles/card.css' 

function Card(props) {

    return (
        <div className="card">
            <div className="card-image">
                Image
            </div>
            <div className="card-footer">
                {props.name}
            </div>
        </div>
    )
}

export default Card;