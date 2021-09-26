import './Country.css'

let Country = (props) => {
    return (
    <div className="country">
        <span className="country-id"><img src={`https://www.countryflags.io/${props.countryId}/shiny/32.png`}></img></span>
        <span className="percentage-bar"><progress value={props.percent*100} max="100"></progress></span>
        <span className="percentage-numeral">{`${Math.round(props.percent*100)}%`}</span>

    </div>
    );
}

export default Country;