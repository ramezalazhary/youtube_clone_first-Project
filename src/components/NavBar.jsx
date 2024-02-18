import { Stack } from '@mui/material'
import React from 'react'
import { logo } from '../utils/constants'
import { SearchBar } from './'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (

        <Stack
            direction={"row"}
            alignItems={"center"} justifyContent={"space-between"}
            sx={{ zIndex: "22", position: "sticky", top: 0, backgroundColor: "bgc.dark", padding: "15px 20px" }}>
            <Link to={'/'}>
                <img src={logo} alt="logo" height={45} />

            </Link>

            <SearchBar />
        </Stack>

    )
}

export default NavBar