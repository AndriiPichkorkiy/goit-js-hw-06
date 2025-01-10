class StringBuilder {
  #value = '';
  /**
   *
   * @param {String} initialValue
   */
  constructor(initialValue) {
    this.#value = initialValue;
  }

  /**
   *
   * @returns {String} Повертає поточне значення приватної властивості `value`
   */
  getValue() {
    return this.#value;
  }

  /**
   * Отримує параметр `str` (рядок) і додає його в кінець значення приватної властивості `value` об'єкта, який викликає цей метод
   * @param {String} str
   */
  padEnd(str) {
    this.#value += str;
  }

  /**
   * Отримує параметр `str` (рядок) і додає його на початок значення приватної властивості `value` об'єкта, який викликає цей метод
   * @param {String} str
   */
  padStart(str) {
    this.#value = str + this.#value;
  }

  /**
   * Отримує параметр `str` (рядок) і додає його на початок і в кінець значення приватної властивості `value` об'єкта, який викликає цей метод
   * @param {String} str
   */
  padBoth(str) {
    this.padEnd(str);
    this.padStart(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
