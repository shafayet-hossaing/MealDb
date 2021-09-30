import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
      }
        const navStyle = {
            marginTop: "25px",
            textAlign: "center"
        }
    const linkStyle = {
        textDecoration: "none",
        textTransform: "capitalize",
        marginRight: "14px",
        color: "#1976d2",
        fontWeight: "bold",
        fontSize: "26px"
    }
      
    return (
        <Container fixed>
            <div>
                <nav style={navStyle}>
                    <Link style={linkStyle} to="/home">Home</Link>
                    <Link style={linkStyle} to="/about">About</Link>
                    <Link style={linkStyle} to="/contact">Contact</Link>
                </nav>
            </div>
        </Container>
        
    );
};

export default Header;