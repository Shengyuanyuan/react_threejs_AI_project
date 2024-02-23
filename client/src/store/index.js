import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTextrue: true,
    isFullTextrue: false,
    logoDecal: './dogeB.png',
    fullDecal: './jersey.png',
})

export default state;