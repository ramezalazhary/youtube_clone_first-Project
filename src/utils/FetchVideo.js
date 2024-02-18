import axios from "axios";

const BaseUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        order: 'date'
    },
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchVideo = async (endPoint) => {

    const { data } = await axios.get(`${BaseUrl}/${endPoint}`, options);

    return data
}