import { Button, Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const SidBar = ({ SelectedCat, setSelectedCat }) => (
    <Stack sx={{
        px: 1,
        overflowY: "auto",
        height: { sx: "auto", md: "100%" },
        flexDirection: { md: "column", xs: "row" },
        gap: "10px"
    }}>
        {categories.map((categ) => {

            return (
                <Button
                    key={categ.name}
                    sx={{
                        minWidth: 130,
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "start",
                        gap: "10px",
                        padding: " 10px ",

                        borderRadius: "10px",
                        color: SelectedCat !== categ.name ? "#555" : "white",
                        backgroundColor: SelectedCat === categ.name ? "#1f1f1f" : "transparents",
                        ":hover": {
                            color: "white",
                            backgroundColor: "#1f1f1f"
                        }
                    }}
                    onClick={() => setSelectedCat(categ.name)}

                >



                    {categ.icon}



                    {categ.name}



                </Button>
            )
        })}
    </Stack >

)

export default SidBar