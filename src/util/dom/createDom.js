export default function createDom(value) {
    if (typeof value === "string") {
      var el = document.createElement('div');
      el.innerHTML = value;
      value = el.firstChild;
      el.removeChild(value);
      return value;
    } else {
      document.createRange().createContextualFragment(value).firstChild;
    }
}
