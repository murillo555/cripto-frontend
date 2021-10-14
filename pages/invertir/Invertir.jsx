import React,{ useState, useEffect} from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import Modal from '../../components/shared/Modal';
import {getInvestments, getCriptos} from '../../api/currencyData'
import InvestmentForm from '../../components/Investment/InvestmentForm'
import Image from 'next/image';
function Invertir() {
    const [investments, setInvestments] = useState([])  
    const [criptos, setCriptos] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        getInvestments()
            .then(response=>setInvestments(response))
            .catch(err=>console.log(err))
    }, [show])
    useEffect(() => {
        getCriptos()
            .then(response=>setCriptos(response))
            .catch(err=>console.log(err))
    }, [])
    return (
        <AdminLayout>
            <div className='d-flex flex-column pb-4'>
                <div className='border-bottom pb-5 mt-5 d-flex flex-between align-items-center'>
                    <h1 className='text-white'>Mis Inversiones</h1>
                    <div>
                        <button className='btn btn-action-primary' onClick={()=>setShow(true)}> <h4>Nueva Inversion</h4></button>
                    </div>
                </div>
                <div className='mt-4'>
                    {
                        investments.map((investment,index)=>(
                            <InvestHistory key={index} currency={investment.currency} investment={investment}/>
                        ))
                    }
                </div>
            </div>
            <Modal setShow={setShow} title='Nueva Inversion' show={show}><InvestmentForm criptos={criptos} setShow={setShow}/></Modal>
        </AdminLayout>
    )
}

function InvestHistory (props){
    const {currency={}, investment} = props
    return(
        <div>
            <div className='card my-2'>
                <div className='card-title'></div>
                <div className='card-body d-flex flex-between'>
                    <div className='d-flex flex-column'>
                        <h5>{currency.symbol}</h5>
                        <Image src={`/Icons/${currency.slug}-${currency.symbol}-logo.svg`} height={30} width={30} />
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <h5>Inversion</h5>
                        <p>{'$' + ' ' + investment.investment.toFixed(2)}</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <h5>Ganancia mensual</h5>
                        <p>{'$' + ' ' + investment.monthly.toFixed(2)}</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <h5>Ganancia a 6 meses</h5>
                        <p>{'$' + ' ' + investment.semiAnnual.toFixed(2)}</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <h5>Ganancia a 12 meses</h5>
                        <p>{'$' + ' ' + investment.anual.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invertir
