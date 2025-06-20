import { AuthContext } from '@/context/authContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'

const Topbar = () => {
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
        <div className="page-title bg-cover"  
                style={{background:"url(assets/img/bn-1.jpg) no-repeat;"}}
                data-overlay="5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12"></div>
                </div>
            </div>
        </div>
  )
}

export default Topbar