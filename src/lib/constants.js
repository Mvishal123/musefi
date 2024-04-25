import { adele2, bruno_mars, ed_sheeran, luis_fonsi, jk } from "@/assets";

export const GENRES = [
  { genre: "pop", value: "POP", href: "/discover/pop" },
  { genre: "rock", value: "ROCK", href: "/discover/rock" },
  { genre: "hip-hop", value: "HIP-HOP", href: "/discover/hip-hop" },
  { genre: "electronic", value: "ELECTRONIC", href: "/discover/electronic" },
  { genre: "jazz", value: "JAZZ", href: "/discover/jazz" },
  { genre: "country", value: "COUNTRY", href: "/discover/country" },
  { genre: "all", value: "ALL", href: "/" },
];

export const SIDEBAR_NAV = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Top artists",
    href: "/top-artists",
  },
  {
    label: "Explore",
    href: "/explore",
  },
];

export const SONGS = [
  {
    id: 1,
    title: "Hello",
    artist: "Adele",
    genre: "pop",
    duration: "4:23",
    artistImage: adele2,
    songUrl: "audio/hello.mp3",
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "pop",
    duration: "3:53",
    artistImage: ed_sheeran,
    songUrl: "audio/shape_of_you.mp3",
  },
  {
    id: 3,
    title: "Euphoria",
    artist: "Jungkook",
    genre: "pop",
    duration: "3:48",
    artistImage: jk,
    songUrl: "audio/euphoria.mp3",
  },
  {
    id: 4,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    genre: "funk",
    duration: "4:30",
    artistImage: bruno_mars,
    songUrl: "audio/uptown.mp3",
  },
  {
    id: 5,
    title: "Someone Like You",
    artist: "Adele",
    genre: "pop",
    duration: "4:45",
    artistImage: adele2,
    songUrl: "audio/despacito.mp3",
  },
  {
    id: 6,
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    genre: "Latin pop",
    duration: "4:41",
    artistImage: luis_fonsi,
    songUrl: "audio/despacito.mp3",
  },
];
