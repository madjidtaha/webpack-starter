import EventEmitter from 'eventemitter3';

import KeyboardController from './KeyboardController';

let keyboardController;
class InputController extends EventEmitter {
  constructor() {
    super();

    this.controllers = [];
    keyboardController = new KeyboardController();

  }
}

export default new InputController();
