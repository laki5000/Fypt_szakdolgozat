import { React, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component{
    constructor(props){
        super(props)

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser= (e) => {
        e.preventDefault();
        
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('keresztnev');
        this.props.onLogout();
      }

    render(){
        const { isAuthenticated, keresztNev, admin } = this.props;

        return (
            <div id='div_navbar'>
                <div id='div_logo'>
                    <div id='div_logo2'>
                        <Link to='/homePage'>
                            <div className='link_icons'>
                                <img id='logo' src="dumbell_icon.jpg" alt="logo"></img> 
                            </div>
                        </Link>
                    </div>
                </div>
                <div id='div_login_and_menu'>
                    <div id='div_login_options_etc'>
                        {isAuthenticated ? (
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
                                    Hello {keresztNev}
                                </div>
                                <div className='div_login_functions'>
                                    <Link to='/profilePage' onClick={this.logoutUser}>
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
                    <div id='div_menu'>
                        <div className='div_menu_options'>
                            <Link to='/homePage' style={{ textDecoration: 'none' }}>
                                <div className='div_menu_options2'>Kezdőlap</div>
                            </Link>
                        </div>
                        <div className='div_menu_options'>
                            <Link to='/trainersPage' style={{ textDecoration: 'none' }}>
                                <div className='div_menu_options2'>Edzőink</div>
                            </Link>
                        </div>
                        <div className='div_menu_options'>
                            <Link to='/calCalcPage' style={{ textDecoration: 'none' }}>
                                <div className='div_menu_options2'>Kalória Kalkulátor</div>
                            </Link>
                        </div>
                        <div className='div_menu_options'>
                            <Link to='/joinPage' style={{ textDecoration: 'none' }}>
                                <div className='div_menu_options2'>Csatlakozz</div>
                            </Link>
                        </div>
                        <div className='div_menu_options'>
                            <Link to='/aboutPage' style={{ textDecoration: 'none' }}>
                                <div className='div_menu_options2'>Rólunk</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar);