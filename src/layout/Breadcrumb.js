import { useEffect, useState } from "react";
import { Link, useHref, useLocation } from "react-router-dom";

function Breadcrumb() { 
    let loc = useLocation();
    const [pathes, setPathes] = useState('');
    useEffect(() => {
        setPathes(window.location.pathname);
    },[loc])
    // setPathes(window.location.pathname);
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb fw-semibold">
                    <li className="breadcrumb-item"><Link to={`/`}>Home</Link></li>
                    {[pathes].map((e, i) => 
                    <li key={i} className="breadcrumb-item active" aria-current="page">{e}</li>
                    )}
                </ol>
            </nav>
        </>
    )
}
export default Breadcrumb;