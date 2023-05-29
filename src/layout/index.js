import { Box } from "@mui/material"
import { Link } from "react-router-dom"

const Layout = ({children}) => {
    return (
        <>
            <Box width="100%" height="60px" display="flex" alignItems="center" justifyContent="space-evenly" borderBottom="2px solid #2dc72d" sx={{position: "fixed", top: 0, background: "#111"}}>
                <Link to="/posts" style={{ textDecoration: 'none' }}>
                    <Box className="header" sx={{fontSize: "20px", fontWeight: "700", color: "#555"}}>
                        Посты
                    </Box>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Box className="header" sx={{fontSize: "20px", fontWeight: "700", color: "#555"}}>
                        Вход
                    </Box>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <Box className="header" sx={{fontSize: "20px", fontWeight: "700", color: "#555"}}>
                        Регистрация
                    </Box>
                </Link>
            </Box>  
            {children}      
        </>
    )
}

export default Layout