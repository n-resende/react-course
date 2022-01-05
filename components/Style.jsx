export default function Style(props) {
    return(
        <div>
            <h1 style={ {
                backgroundColor: props.num >= 0 ? "yellow" : "blueviolet",
                color: props.color,
                textAlign: props.right ? "right" : "left",
                } }>
                Text
            </h1>
            <h2 className={props.num >= 0 ? "crimson" : "dodgerblue"}>
                Text
            </h2>
        </div>
    )
}