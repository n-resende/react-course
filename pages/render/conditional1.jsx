import EvenOnly from "../../components/EvenOnly";

export default function conditional1() {
    return(
        <div>
            <EvenOnly num={1}/>
            <EvenOnly num={2}/>
            <EvenOnly num={3}/>
            <EvenOnly num={4}/>
        </div>
    )
}