import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Feed, ChannelDetails, VideoDetails, SearchFeed } from './components';
import Root from './Pages/Root';


const theme = createTheme({
  palette: {
    primary: {
      light: '#555',
      main: '#555',
      dark: '#555',
      contrastText: '#ffff',

    },
    secondary: {
      light: '#5555',
      main: '#ededed',
      dark: '#ededed',
      contrastText: '#000000',

    },
    bgc: {
      main: "#ffffff",
      light: "#0d0d0d",
      dark: "#000000",
      contrastText: '#ffffff',
    }
  },
});


const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Feed />
      },
      {
        path: "/video/:id",
        element: <VideoDetails />
      },
      {
        path: "/channel/:id",
        element: <ChannelDetails />
      },
      {
        path: "/search/:param",
        element: <SearchFeed />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={route} />

  </ThemeProvider>



);
