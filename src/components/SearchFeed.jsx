import { Stack, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Videos } from './'
import { FetchVideo } from '../utils/FetchVideo';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const [videos, setVideos] = useState(null)
    const { param } = useParams()

    useEffect(() => {
        setVideos(null);

        FetchVideo(`search?part=snippet&q=${param}`)
            .then((data) => {
                setVideos(data.items)
            }
            )

    }, [param])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box p={2} sx={{ overflowY: "auto", flex: 2 }}>
                <Typography variant='h5' mb={3} component={"div"} color={"white"}>
                    Result Video : {param}
                </Typography>

                <Videos {...{ videos }} />
            </Box>
        </Stack>
    )
}

export default SearchFeed