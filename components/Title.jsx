export default function Title(props) {
    return props.small ? (
        <>
            <p>{props.main}</p>
            <p>{props.sub}</p>
        </>
    ):(
        <>
            <h1>{props.main}</h1>
            <h2>{props.sub}</h2>
        </>
    )
}