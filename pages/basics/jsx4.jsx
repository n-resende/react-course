export default function jsx4(){
    const subtitle = "I am in Javascript!"
    const h3Text = <h3>{ 2 ** 4}</h3>

    return(
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitle}</h2>
            <h3>{3 * 3}</h3>
            {h3Text}
            <h4>{Math.max(13,42)}</h4>
            <h5>{between(24,13,42)}</h5>
        </div>
    )
}

function between(valor, min, max) {
    if ( valor >= min && valor <= max) {
        return "Yes"
    } else {
        return "No"
    }
}