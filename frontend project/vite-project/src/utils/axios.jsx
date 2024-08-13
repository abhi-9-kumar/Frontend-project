import axios from 'axios';

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        accept: 'application/json',
    Authorization: 'Bearer      eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWM1MTk1ZTkyYzkzNmVjMmZjNjY4ZjM5YzNmYzg5OSIsIm5iZiI6MTcyMjkyMjM0NC45NTcyMjYsInN1YiI6IjY2YjFhZjZmMzgyMTlkZTVhOGExMzBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-COj2IP05Ruf3e9Z4eL3EY5IXgEEbB8KdrrK2iNv3S4'
 
    },
    
});

export default instance;