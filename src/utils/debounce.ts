export default function debounce(func: () => void, delay: number) {
  let timer: number = null;

  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    // @ts-ignore
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}
