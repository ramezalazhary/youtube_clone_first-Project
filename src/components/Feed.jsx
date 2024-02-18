import { Stack, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { SidBar, Videos } from './'
import { FetchVideo } from '../utils/FetchVideo';

const Feed = () => {
  const [SelectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState(null)
  useEffect(() => {
    setVideos(null);

    FetchVideo(`search?part=snippet&q=${SelectedCat}`)
      .then((data) => {
        setVideos(data.items)
      }
      ).catch((message) => {
        alert(message === "AxiosError: Request failed with status code 429" ? "ou have exceeded the DAILY quota for Request on your current plan" : message)
      })

  }, [SelectedCat])

  return (
    <Stack sx={{
      flexDirection: { sx: "column", md: "row" }, overflow: "hidden", height: "calc(100vh - 75px) "
    }}>
      <Box
        sx={{

          height: { sx: "auto", md: "100%" },
          width: { md: "240px", xs: "auto" },
          backgroundColor: "bgc.dark",
          borderRight: "1px solid #2f2f2f"
        }}>
        <SidBar {...{ SelectedCat, setSelectedCat }} />
      </Box>
      <Box p={3} sx={{ overflowY: "auto", flex: 2, height: "85vh" }}>
        <Typography variant='h4' component={"div"} color={"white"} mb={3}>
          {SelectedCat} video
        </Typography>
        <Videos {...{ videos }} />
      </Box>
    </Stack>
  )
}

export default Feed