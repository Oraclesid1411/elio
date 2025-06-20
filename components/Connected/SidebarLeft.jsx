import { StaticIP } from '@/config/staticip';
import { AuthContext } from '@/context/authContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'

const SidebarLeft = () => {
    const { currentUser, logout } = useContext(AuthContext)
    const router = useRouter();
    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            await logout()
            router.push('/Login');
        } catch (error) {
            alert('Impossiv', error);
        }
    }
    return (
        <div className="dashboard-navbar overlio-top">

            <div className="d-user-avater">
            
                {
                    currentUser && currentUser.logo ?
                    <img src={`${StaticIP}imageprestataires/${currentUser.logo}`} className="img-fluid rounded" alt={currentUser.nom} />
                    :
                    <center>
                    <div className="custom-file avater_uploads">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">
                            <i className="fa fa-user"></i>
                        </label>
                    </div>
                    </center>
                }   
                
                <h4>{currentUser && currentUser.nom}</h4>
                <span>{currentUser && currentUser.intitule_service}</span><br/>
                <span> {currentUser?.ville ? currentUser?.ville.nom : ""}</span>
            </div>

            <div className="d-navigation">
                <ul id="metismenu" className="metismenu">
                    <li className="active"><a href="dashboard.html"><i className="ti-dashboard"></i>Tableau de bord</a></li>
                    <li><a href="/MonCompte"><i className="ti-user"></i>Mon compte</a></li>
                    <li><a href="messages.html"><i className="ti-email"></i>Messagerie</a></li>

                    <li><a href="reviews.html"><i className="fa fa-star"></i>Mes demandes</a></li>
                    <li><a href="reviews.html"><i className="fa fa-star"></i>Mes abonnements</a></li>
                    
                        <li>

                            <a onClick={handleLogout} style={{ color: 'brown', cursor: 'pointer' }}>
                                <i className="ti-power-off"></i>Déconnexion
                            </a>
                        </li>
                    
                </ul>
            </div>

        </div>
    )
}

export default SidebarLeft