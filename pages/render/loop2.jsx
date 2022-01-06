import productList from "../../data/productList"

export default function loop2() {
    function lineRender() {
        return productList.map(product => {
            return(
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })
    }
    
    return(
        <div>
            <table style={{
                border: "1px solid #000"
            }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {lineRender()}
                </tbody>
            </table>
        </div>
    )
}