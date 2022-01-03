import Title from '../../components/Title'

export default function titleTest() {
    return(
        <div>
            <Title 
                main="Sign In Page" 
                sub="Create, change and delete things!"
            />
            <Title 
                main="Log In Page" 
                sub="Inform your e-mail and password"
                small // ou colocar 'small={true}'
            />
        </div>
    )
}