export default function list1(){
    const list = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div>
        {list.map(function(nome,i) {
            return <span>{nome}, </span>
        })}
        </div>
    )
}