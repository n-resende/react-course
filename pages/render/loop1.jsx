export default function loop1() {
    const list = [
        'Aris',
        'Bris',
        'Cris',
        'Dris',
        'Eris'
    ]
    
    function listRender() {
        return list.map((nome,i) => <li key={i}>{nome}</li>)
        /*
        or

        return list.map(function(nome,i){
            return <li key={i}>{nome}</li>
        })
        */
    }

    return(
        <ul>
            {listRender()}
        </ul>
    )
}

/*
function listRender() {
    const itens = []

    for (let i = 0; i < list.length; i++) {
        itens.push(<li key={i}>{list[i]}</li>)
        
    }

    return itens
}
*/