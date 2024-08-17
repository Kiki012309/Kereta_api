function addCarriage() {
    const name = document.getElementById('carriage-name').value;
    if (name.trim() !== '') {
        const train = document.querySelector('.train');
        const newCarriage = document.createElement('div');
        newCarriage.classList.add('carriage');
        newCarriage.innerHTML = `<div class="carriage-name">${name}</div>`;
        train.appendChild(newCarriage);
        document.getElementById('carriage-name').value = '';
    }
}
