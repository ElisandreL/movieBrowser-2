import React from "react";
import axios from 'axios';

const BASE_URL = 'https://api.themovie.org/3';
const api_key = '6af4c8b3996dc77c45a6ed3f072e87c5';

function FetchHome() {
    let arr = [];

    const [data, setData] = React.useState([]);

    const api = axios.create({baseURL: BASE_URL});

    const getUpcoming = api.get('/trending/movie/week', {params: {api_key}});

    const getImage = (path) => `https://image.tmbd.org/t/p/w500/${path}`;

    React.useEffect(() => {
        getUpcoming.then(response => {
            setData(response.data.results)
        })
    }, []);

    return (
        <div>
            {data.map((movie) => (
                <p> {movie.original_title} </p>
            ))}
        </div>
    );
}

export default FetchHome;