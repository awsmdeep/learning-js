const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results'); // Added # to select element by ID

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter a valid height`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter a valid weight`;
    } else {
        const bmi = (weight / (height * height) / 10000)
        result.innerHTML = `<span>${bmi}</span>`;
    }
});
