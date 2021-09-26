

let Country = (props) => {
    return (
    <div className="country">
        <span className="country-id">{props.countryId}</span>
        <span className="percentage-bar"><progress value={props.percent*100} max="100"></progress></span>
        <span className="percentage-numeral">{`${Math.round(props.percent*100)}%`}</span>

    </div>
    );
}

export default Country;