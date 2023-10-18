export default function debounce(fn: () => void, delay: number) {
  let timer: number = -1;

  return function () {
    const context = this;
    const [args] = Array.from(arguments);

    clearTimeout(timer);
    // @ts-ignore
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
