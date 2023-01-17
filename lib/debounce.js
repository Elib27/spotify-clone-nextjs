export default function debounce(func, delay = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}