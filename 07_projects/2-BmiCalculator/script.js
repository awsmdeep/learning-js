const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results'); // Selecting the span inside #results

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter a valid height`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter a valid weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = bmi;

        const result2 = document.querySelector("#results2");

        if (parseFloat(bmi) < 18.6) {
            result2.innerHTML = `<span>Under Weight</span>`;
        } else if (parseFloat(bmi) >= 18.6 && parseFloat(bmi) <= 24.9) {
            result2.innerHTML = `<span>Normal Weight</span>`;
        } else {
            result2.innerHTML = `<span>Over Weight</span>`;
        }
    }
});
