import {useState} from "react"
function Formulario(){

    function cadastrar(e){
        e.preventDefault()
        //console.log(nome)
        //console.log('Cadastrou um usuário')
        console.log(`Usuario ${nome} cadastro com a senha: ${senha}`)
    }

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlfor="nome">Nome:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome" value={nome}
                    onChange={(e)=> setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlfor="senha">Senha:</label>
                    <input type="password" id="senha" placeholder="Digite sua senha"
                    onChange={(e)=> setSenha(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/> 
                </div>
            </form>
        </div>
    )
}
export default Formulario