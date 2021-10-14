import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import {getAssetsData} from '../../api/currencyData'
import {CSVLink} from 'react-csv'
const CriptoTable = () => {
    const [assets, setAssets] = useState([]);

    useEffect(async() => {
        await getAssetsData()
                .then(response=>setAssets(response))
                .catch(err=>setAssets([]))
    }, [])
    return (
        <div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ASSET</th>
                        <th></th>
                        <th>PRICE(USD)</th>
                        <th>CHANGE VS USD (1H)</th>
                        <th>CHANGE VS USD (24H)</th>
                        <th>7 DAY TREND</th>
                        <th>REPORTED MARKETCAP</th>
                        <th>REAL VOLUME (24H)</th>
                        <th>CHANGE VS USD (7D)</th>
                        <th>CHANGE VS USD (30D)</th>
                        <th>CHANGE VS USD(YTD)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    assets?.map((currency,index) =>(
                        <tr  className='align-middle' key={index}>
                            <td>{index}</td>
                            <td ><Image src={`/Icons/${currency.slug}-${currency.symbol}-logo.svg`} height={30} width={30} /></td>
                            <td className='w-15'>{`${currency.slug}-${currency.symbol}`}</td>
                            <td>{'$' + currency.price}</td>
                            <td className={currency.change_1h>0 ? 'text-positive' : 'text-negative'}>
                                {currency.change_1h + '%'}
                            </td>
                            <td className={currency.change_24h>0 ? 'text-positive' : 'text-negative'}>
                                {currency.change_24h + '%'}
                            </td>
                            <td></td>
                            <td>
                                {'$' + currency.marketCap + "B"}
                            </td>
                            <td>
                                {'$' + currency.realVolume + "B"}
                            </td>
                            <td className={currency.change_7d > 0 ? 'text-positive' : 'text-negative'}>
                                {currency.change_7d + '%'}
                            </td>
                            <td className={currency.change_30d>0 ? 'text-positive' : 'text-negative'}>
                                {currency.change_30d + '%'}
                            </td>
                            <td className={currency.change_ytd > 0 ? 'text-positive' : 'text-negative'}>
                                {currency.change_ytd + '%'}
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <div className='btn btn-action-primary'>
                <CSVLink data={assets} filename={'DashBoards.csv'}>Exportar a CSV</CSVLink>
            </div>
        </div>
    )
}

export default CriptoTable
