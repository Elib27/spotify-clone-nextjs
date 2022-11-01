export default function randomInteger(min, max) {
  return Math.random() * (max - min) + min;
}