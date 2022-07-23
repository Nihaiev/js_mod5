/**
 * Класи
 *  - Оголошення
 *  - конструктор
 *  - методи
 *  - static
 *  - Приватні властивості
 *  - Синтаксис публічних властивостей і методи класів
 *  - Гетери і сеттери 
 */

class Car1 { 
    constructor() {
        console.log('Виконується конструктор');
    }
}
console.dir(Car1)
const carInstance = new Car1(
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
);
console.log(carInstance);