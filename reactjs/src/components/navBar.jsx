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
        <div className='divrow bgclr1 pddnglr1 pddngt1'>
            <div className='divrow jcc bgclr2 divlogop'>
                <div className='pddng1 wdth1 mrgna tac'>
                    <Link to='/homePage'>
                        <div className='hvr1 linkico'>
                            <img className='wdth3' src="dumbell_icon.jpg" alt="logo"></img> 
                        </div>
                    </Link>
                </div>
            </div>
            <div className='divcol bgclr2 divlgnandmenu'>
                <div className='divrow bgclr2 divlgnoptns'>
                    {actualState.isAuthenticated ? (
                        <>
                            {admin &&
                                <div className='divlgnfunctns'>
                                    <Link to='/adminPage'>
                                    <div className='hvr1 linkico'>
                                        <FontAwesomeIcon icon={faUserTie}/>
                                    </div>
                                    </Link>
                                </div>
                            }
                            <div className='divlgnfunctns'>
                                <Link to='/profilePage'>
                                    <div className='hvr1 linkico'>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                </Link>
                            </div>
                            <div className='divlgnfunctns hvr1 linkico'>
                                Hello {actualState.keresztNev}
                            </div>
                            <div className='divlgnfunctns'>
                                <Link to='/profilePage' onClick={logoutUser}>
                                    <div className='hvr1 linkico'>
                                        <FontAwesomeIcon icon={faRightFromBracket}/>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className='divlgnfunctns'>
                            <Link to='/loginPage' style={{ textDecoration: 'none' }}>
                                <div className='hvr1 linkico'>
                                    <div>
                                        Bejelentkezés
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div className='divrow wdth1'>
                    <div className='divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns'>
                        <Link to='/homePage' style={{ textDecoration: 'none' }}>
                            <div className='divmnuoptns2'>Kezdőlap</div>
                        </Link>
                    </div>
                    <div className='divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns'>
                        <Link to='/trainersPage' style={{ textDecoration: 'none' }}>
                            <div className='divmnuoptns2'>Edzőink</div>
                        </Link>
                    </div>
                    <div className='divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns'>
                        <Link to='/calCalcPage' style={{ textDecoration: 'none' }}>
                            <div className='divmnuoptns2'>Kalória Kalkulátor</div>
                        </Link>
                    </div>
                    <div className='divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns'>
                        <Link to='/joinPage' style={{ textDecoration: 'none' }}>
                            <div className='divmnuoptns2'>Csatlakozz</div>
                        </Link>
                    </div>
                    <div className='divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns'>
                        <Link to='/aboutPage' style={{ textDecoration: 'none' }}>
                            <div className='divmnuoptns2'>Rólunk</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NavBar);