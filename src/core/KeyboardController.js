import EventEmitter from 'eventemitter3';

export default class KeyboardController extends EventEmitter {
  constructor() {
    super();
    console.log(this);
    this.addEvents();
  }

  addEvents() {
    document.addEventListener('keydown', this.onKey);
    document.addEventListener('keyup', this.onKey);
    // document.addEventListener('keypress', this.onKey);
  }

  onKey(e) {
    console.log('type => %s, keycode => %s, key => %s', e.type, e.keyCode, e.key);
  }
}
