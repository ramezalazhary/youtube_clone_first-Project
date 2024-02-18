import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };
    return (
        <Paper
            component="form"
            onSubmit={onhandleSubmit}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500, borderRadius: "20px" }}
        >

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search ' }}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '8px' }} aria-label="search">
                <SearchOutlined />
            </IconButton>

        </Paper>
    )
}

export default SearchBar