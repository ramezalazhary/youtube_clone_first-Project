import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components'

const Root = (prop) => {

    return (
        <Stack
            direction={"column"}
            sx={{ minHeight: "100vh", backgroundColor: "bgc.light" }}>
            <NavBar />
            <Outlet />
        </Stack>
    )
}

export default Root