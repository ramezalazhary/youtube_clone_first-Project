import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
      <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
          <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
              <CardMedia image={snippet?.thumbnails?.high?.url}  alt={snippet?.title}
                  sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
              />
          </Link>
          <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
              <Link to={videoId ? `/video/${videoId}` : "search"} >
                  <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                      {snippet?.title.slice(0, 60) || "not title"}
                  </Typography>
              </Link>
              <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "search"} >
                  <Typography variant="subtitle2" color="gray">
                      {snippet?.channelTitle || "there's No chanle title"}
                    
                  </Typography>
              </Link>
          </CardContent>
      </Card>
  )
}

export default VideoCard