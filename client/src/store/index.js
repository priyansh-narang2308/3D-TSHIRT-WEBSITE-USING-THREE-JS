import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "/public/public/threejs.png", //half texture shirt
  fullDecal: "/public/public/threejs.png", //full texture shirt
});

export default state;
