import React from 'react'
import GLogo from '../../media/google-drive-logo.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import '../../styles/Header.css'

const index = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={GLogo} alt='logo' />
                <span>Drive</span>
            </div>
            <div className='header__searchContainer'>
                <div className='header__searchbar'>
                <SearchIcon />
                <input type="text" placeholder="Search in Drive"/>
                <ExpandMoreIcon />
                </div>
            </div>
            <div className='header__icons'>
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>

                <AppsIcon />
                <img src="" alt="User Photo"/>
            </div>
        </div>
    )
}

export default index
