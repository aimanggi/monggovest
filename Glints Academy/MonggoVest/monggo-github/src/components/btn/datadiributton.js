import React from 'react';
import {Link} from "react-router-dom";



const LihatBirus = (props) => {
        return(
            <Link to='/payment'>   <button type="button" className="btns btn-outline-primarys" onClick={props.action}>LANJUT KE PEMBAYARAN</button> </Link>  
         )
    }

export default LihatBirus;
