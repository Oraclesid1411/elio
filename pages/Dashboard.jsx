import Layouta from '@/components/Connected/Layouta'
import Layout from '@/components/Layout'
import { AuthContext } from '@/context/authContext';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'

const Dashboard = () => {
    const router = useRouter();
    const { name, profil } = router.query;
    const [userRole, setUserRole] = useState('');
  
    const {currentUser } = useContext(AuthContext)
    return (
        <Layout>
        <Layouta>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="bredcrumb_wrap">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Tableau de bord</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="dashboard-stat">
                        <div className="dashboard-stat-icon widget-1"><i className="ti-location-pin"></i></div>
                        <div className="dashboard-stat-content"><h4><span className="cto">12</span></h4> <p>Demandes traitées</p></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="dashboard-stat">
                        <div className="dashboard-stat-icon widget-2"><i className="ti-pie-chart"></i></div>
                        <div className="dashboard-stat-content"><h4><span className="cto">535.000</span>F</h4> <p>Montant total gagné</p></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="dashboard-stat">
                        <div className="dashboard-stat-icon widget-5"><i className="ti-pie-chart"></i></div>
                        <div className="dashboard-stat-content"><h4><span className="cto">53.500</span>F</h4> <p>Commission à verser</p></div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="dashboard-stat">
                        <div className="dashboard-stat-icon widget-3"><i className="ti-star"></i></div>
                        <div className="dashboard-stat-content"><h4><span className="cto">72</span></h4> <p>Note total obtenue</p></div>
                    </div>
                </div>
            </div>

        </Layouta>
        </Layout>
    )
}

export default Dashboard