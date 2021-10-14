import React,{useState} from 'react'
import {newInvestMent} from '../../api/currencyData'
const InvestmentForm = (props) => {
    const {criptos, setShow} = props;
    const [investmentData, setinvestmentData] = useState({
        currency:'',
        investment:0
    })

    const processData = (e) => {
        e.preventDefault()
        newInvestMent(investmentData)
            .then(()=>setShow(false))
            .catch(()=>setShow(false))
    }

    return (
        <div className=''>
            <form onSubmit={e=>processData(e)}>
                <label  className='mb-2'>Selecciona la moneda en que deseas invertir</label>
                <select className="form-control" defaultValue='' onChange={ e=>setinvestmentData({...investmentData,currency:e.target.value})} required>
                    <option disabled value='' >Seleccionar</option>
                    {
                        criptos.map((cripto,index)=>(
                            <option key={index} value={cripto._id}>{cripto.name}</option>
                        ))
                    }
                </select>
                <label  className='my-2'>Cuanto deseas Invertir?</label>
                <input className="form-control" type='number' step=".001" required  onChange={ e=>setinvestmentData({...investmentData, investment:e.target.value})}/>
                <div className='d-flex justify-content-end mt-4'>
                    <button className='btn btn-action-primary' tpye='submit'> Enviar</button>
                </div> 
            </form>
        </div>
    )
}

export default InvestmentForm
