import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
    const { isAuthenticated, keresztNev, admin, onLogout } = props;

    const [actualState, setNewState] = useState({
        isAuthenticated: isAuthenticated,
        keresztNev: keresztNev,
        admin: admin
      })

    const logoutUser = (e) => {
        e.preventDefault();
        setNewState({
            isAuthenticated: false,
            keresztNev: '',
            admin: '',
        })
        onLogout();
    }

    useEffect(() => {
        if(isAuthenticated)
        {
            setNewState((prevState) => ({
                ...prevState,
                isAuthenticated: isAuthenticated,
              }));
        }
        if(keresztNev)
        {
            setNewState((prevState) => ({
                ...prevState,
                keresztNev: keresztNev
              }));
        }
        if(admin)
        {
            setNewState((prevState) => ({
                ...prevState,
                admin: admin
              }));
        }
    }, [isAuthenticated, keresztNev, admin]);

    return (
        <div className='div_row bgcolor_1 padding_left_right_1 padding_top_1'>
            <div className='div_row div_logo'>
                <div className='div_logo2'>
                    <Link to='/homePage'>
                        <div className='link_icons'>
                            <img className='logo' src="dumbell_icon.jpg" alt="logo"></img> 
                        </div>
                    </Link>
                </div>
            </div>
            <div className='div_col div_login_and_menu'>
                <div className='div_row div_login_options_etc'>
                    {actualState.isAuthenticated ? (
                        <>
                            {admin &&
                                <div className='div_login_functions'>
                                    <Link to='/adminPage'>
                                    <div className='link_icons'>
                                        <FontAwesomeIcon icon={faUserTie}/>
                                    </div>
                                    </Link>
                                </div>
                            }
                            <div className='div_login_functions'>
                                <Link to='/profilePage'>
                                    <div className='link_icons'>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                </Link>
                            </div>
                            <div className='div_login_functions link_icons'>
                                Hello {actualState.keresztNev}
                            </div>
                            <div className='div_login_functions'>
                                <Link to='/profilePage' onClick={logoutUser}>
                                    <div className='link_icons'>
                                        <FontAwesomeIcon icon={faRightFromBracket}/>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className='div_login_functions'>
                            <Link to='/loginPage' style={{ textDecoration: 'none' }}>
                                <div className='link_icons'>
                                    <div>
                                        Bejelentkezés
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div className='div_row div_menu'>
                    <div className='div_row div_padding_top1 div_menu_options'>
                        <Link to='/homePage' style={{ textDecoration: 'none' }}>
                            <div className='div_menu_options2'>Kezdőlap</div>
                        </Link>
                    </div>
                    <div className='div_row div_padding_top1 div_menu_options'>
                        <Link to='/trainersPage' style={{ textDecoration: 'none' }}>
                            <div className='div_menu_options2'>Edzőink</div>
                        </Link>
                    </div>
                    <div className='div_row div_padding_top1 div_menu_options'>
                        <Link to='/calCalcPage' style={{ textDecoration: 'none' }}>
                            <div className='div_menu_options2'>Kalória Kalkulátor</div>
                        </Link>
                    </div>
                    <div className='div_row div_padding_top1 div_menu_options'>
                        <Link to='/joinPage' style={{ textDecoration: 'none' }}>
                            <div className='div_menu_options2'>Csatlakozz</div>
                        </Link>
                    </div>
                    <div className='div_row div_padding_top1 div_menu_options'>
                        <Link to='/aboutPage' style={{ textDecoration: 'none' }}>
                            <div className='div_menu_options2'>Rólunk</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NavBar);