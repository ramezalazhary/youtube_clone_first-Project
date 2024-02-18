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
        'X-RapidAPI-Key': '0ca2843448msha49a9f9aee02742p171812jsn7fc866ef5deb',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchVideo = async (endPoint) => {

    const { data } = await axios.get(`${BaseUrl}/${endPoint}`, options);

    return data
}