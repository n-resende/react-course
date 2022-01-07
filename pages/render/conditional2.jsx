import If from "../../components/If";

export default function conditional2() {
    const num = 2
    
    return(
        <div>
            <If test={num % 2 == 0}>
                O número {num} é par
            </If>
            <If test={num % 2 == 0}>
                O número {num} é ímpar
            </If>
        </div>
    )
}