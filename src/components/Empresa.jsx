import './Empresa.css'

function Empresa()
{
    return(
        <div className='container'>
            <h1 className='x2' >DESCRIÇÃO DA EMPRESA </h1>
            <br />
            <br />
            <div className='caixa'>
                <input  className='e1' placeholder="NOME DA EMPRESA " type='text' />
                <input className='e1' placeholder='CNPJ' type='number' />
                <input className='e1' placeholder='LOGOMARCA' type='text' />
                <input className='e1' placeholder='FUNDAÇÃO' />
                <input className='e1' placeholder='DESCRIÇÃO' type='text'/>
                <br />
                <button className='btn1'>VALIDAR </button>
            </div>
        </div>
    )
}

export default Empresa;