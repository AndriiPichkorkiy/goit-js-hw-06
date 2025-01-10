/**
 * @typedef items
 * @type {String[]}
 */

class Storage {
  /** @type {items} */
  #items;

  /** @param {items} items */
  constructor(items) {
    this.#items = items;
  }

  /**
   * Повертає масив поточних товарів
   * @returns {[String]}
   */
  getItems() {
    return this.#items;
  }

  /**
   * Приймає новий товар `newItem` і додає його до масиву товарів у приватну властивість `items` об'єкта
   * @param {String} newItem
   */
  addItem(newItem) {
    this.#items.push(newItem);
  }

  /**
   * Приймає рядок з назвою товару `itemToRemove` і видаляє його з масиву товарів у приватній властивості `items` об'єкта.
   * @param {String} newItem
   */
  removeItem(itemToRemove) {
    const index = this.#items.find(item => item === itemToRemove);
    if (index !== -1) this.#items.splice(index, 1);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
