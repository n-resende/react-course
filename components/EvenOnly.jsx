export default function EvenOnly(props) {
    const evenNum = props.num % 2 == 0

    return(
        <div>
            {evenNum ? 
                <h1>{props.num}</h1> 
                : null
            }
        </div>
    )

    //return evenNum ? <h1>{props.num}</h1> : null
    
    /*
    if(props.num % 2 == 0){
        return <h1>{props.num}</h1>
    }else{
        return null
    }
    */
}