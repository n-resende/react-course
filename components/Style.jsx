export default function Style(props) {
    return(
        <div>
            <h1 style={ {
                backgroundColor: props.num >= 0 ? "yellow" : "blueviolet",
                color: props.color
                } }>
                Text
            </h1>
        </div>
    )
}