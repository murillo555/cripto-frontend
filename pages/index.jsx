import React from 'react';
import AdminLayout from '../layouts/AdminLayout'
import CriptoTable from '../components/DashBoard/CriptoTable'
export default function Home() {
    return (
        <AdminLayout>
            <div className='mt-4'>
                <div className="card shadow mt-4">
                    <div className="card-title border-bottom">
                        <h1>Datos Generales</h1>
                    </div>
                    <div className="card-body">
                        <CriptoTable/>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}