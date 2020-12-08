import React from 'react';
import './Header.css';
import { Box } from '@material-ui/core';

const Header = () => {
    return (
        <div className="position-fixed w-100 header-container">
            <Box boxShadow={2} className="header">
                <div className="d-flex justify-content-between align-items-center h-100">
                    <div className="ml-5 h3 font-weight-bold">Model Demo</div>
                    <div>
                        <ul className="nav mr-5">
                            <li><a href="/">SketchFab</a></li>
                            <li><a href="/three-js" className="ml-4">ThreeJS</a></li>
                        </ul>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Header;
