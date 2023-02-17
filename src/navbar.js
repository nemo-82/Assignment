import React from "react";
import './navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <> 
        <div className="navbar">
        <div className="logo"><div className="logo-pic" src="" alt="pic"></div></div>
        <div className="nav-list">
 
        <Link to ="/" target="_blank"><div className="new" src="" alt="new">➕</div>
        </Link>
        <Link to ="/" target="_blank" ><div className="patient" src="" alt="patient">patient</div> 
        {/* <div className="patient-text">patient</div> */}
        </Link>
        <Link to ="/" target="_blank"><div  className="folder" src="" alt="folder">folder</div>
        {/* <div className="folder-text">folder</div> */}
         </Link>
        <Link to ="/" target="_blank"><div  className="upload" src="" alt="upload">upload</div>
        {/* <div className="patient-text">patient</div> */}
         </Link>
        <Link to ="/" target="_blank"><div  className="report" src="" alt="report">report</div> </Link>
        <Link to ="/" target="_blank"><div className="settings" src="" alt="settings">settings</div></Link>
        <Link to ="/" target="_blank"><div  className="logout" src="" alt="logout">logout</div> </Link>
        </div>
        </div>
        </>
    )
}