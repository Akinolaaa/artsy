// import art1 from '../assets/series/art1.png';
// import art2 from '../assets/series/art2.png';
// import art3 from '../assets/series/art3.png';
// import art4 from '../assets/series/art4.png';
// import art5 from '../assets/series/art5.png';
// import art6 from '../assets/series/art6.png';
// import art7 from '../assets/series/art7.png';
// import art8 from '../assets/series/art8.png';
// import art9 from '../assets/series/art9.png';

const PRODUCTS = [
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDEucG5nIiwiaWF0IjoxNjkzNjAyMTgyLCJleHAiOjFlKzE3M30.D-IzWWJCBpdpUAoZt5ZlYxnWggc6O_qll645fv9cFrw&t=2023-09-01T21%3A03%3A03.060Z",
        name: "PHILOMENA '22",
        price: 3.90,
        artist_name: "Leonardo DaVinci",
        views: 3,

    },
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDIucG5nIiwiaWF0IjoxNjkzNjAyNjM2LCJleHAiOjFlKzEwNH0.uYccLocd3tyswzA3e3FzorQrBGK2svBc-1KBQN5wlo4&t=2023-09-01T21%3A10%3A36.102Z",
        name: "BOOLEAN EGYPTIAN",
        price: 5.70,
        artist_name: "Leonardo DaVinci",
        views: 3,

    },
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDMucG5nIiwiaWF0IjoxNjkzNjAyNjcwLCJleHAiOjFlKzIyMX0.ZIWwwIvSactnAfefDgPooALlDyOGhpOXwpFKDed2bUc&t=2023-09-01T21%3A11%3A10.371Z",
        name: "BLANC",
        price: 3.90,
        artist_name: "Leonardo DaVinci",
        views: 3,

    },
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDQucG5nIiwiaWF0IjoxNjkzNjAyNzYzLCJleHAiOjFlKzMwNX0.QhxCsy6Nde-h1n34YEkt1jE8HMdUgvl6pEogoXPii3o&t=2023-09-01T21%3A12%3A43.428Z",
        name: "ELLIPSIA",
        price: 7.00,
        artist_name: "Leonardo DaVinci",
        views: 3,

    },
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDQucG5nIiwiaWF0IjoxNjkzNjAyNzYzLCJleHAiOjFlKzMwNX0.QhxCsy6Nde-h1n34YEkt1jE8HMdUgvl6pEogoXPii3o&t=2023-09-01T21%3A12%3A43.428Z",
        name: "THE LAWMAKERS",
        price: 3.90,
        artist_name: "Leonardo DaVinci",
        views: 3,

    },
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDYucG5nIiwiaWF0IjoxNjkzNjAyODE2LCJleHAiOjFlKzIwOX0.FGVCBgObAC2tNXPczty6xyqASoBxkUg0N7uePY7eyLY&t=2023-09-01T21%3A13%3A36.164Z",
        name: "VEIL",
        price: 3.20,
        artist_name: "Leonardo DaVinci",
        views: 3,

    },
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art7.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDcucG5nIiwiaWF0IjoxNjkzNjAyODQxLCJleHAiOjFlKzIzMn0.5WyG9uYjM7HYItkgvXZx1PdJIiuCMFBQ85BwdgRNhFA&t=2023-09-01T21%3A14%3A01.611Z",
        name: "ALTERNATING",
        price: 3.90,
        artist_name: "Leonardo DaVinci",
        views: 3,

    },
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art8.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDgucG5nIiwiaWF0IjoxNjkzNjAyODY1LCJleHAiOjFlKzI2N30.0QPuLKN-_M91f08lT19BX5JzOouw3lqICCOBR8GkbCE&t=2023-09-01T21%3A14%3A25.337Z",
        name: "ROSEMARY '22",
        price: 3.90,
        artist_name: "Leonardo DaVinci",
        views: 3,

    },
    {   image: "https://ytggaoromoinqclrhrnu.supabase.co/storage/v1/object/sign/ProductImages/art9.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0SW1hZ2VzL2FydDkucG5nIiwiaWF0IjoxNjkzNjAyODkxLCJleHAiOjFlKzE4OX0.r-O3moItlgFhonH-XzBneIavvGHz8Ea7Iq2-u2giS-A&t=2023-09-01T21%3A14%3A51.207Z",
        name: "BEVERLY",
        price: 5.90,
        artist_name: "Leonardo DaVinci",
        views: 3,
    },
]

export default PRODUCTS;