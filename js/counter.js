const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement ->this', this);
        this.value -= 1;
    }
}

const decrementBtn = document.querySelector('.js-decrement')
const incrementBtn = document.querySelector('.js-increment')
const valueEL = document.querySelector('.js-value')

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEL);

decrementBtn.addEventListener('click', function () {
    console.log('Кликнули на декремент');
    counter.decrement();
    console.log(counter);
    valueEL.textContent = counter.value;
})

incrementBtn.addEventListener('click', function () {
    console.log('Кликнули на інкремент');
        counter.increment();
    console.log(counter);
    valueEL.textContent = counter.value;
})
