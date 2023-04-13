const checkboxContainer = document.getElementById('checkbox-container');

function createCheckboxes() {
    for (let i = 1; i <= 30; i++) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('checkbox-wrapper');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `day-${i}`;

        const label = document.createElement('label');
        label.htmlFor = `day-${i}`;
        label.textContent = `Day ${i}`;

        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        checkboxContainer.appendChild(wrapper);

        wrapper.addEventListener('click', (event) => {
            if (event.target === wrapper) {
                checkbox.checked = !checkbox.checked;
                localStorage.setItem(`day-${i}`, checkbox.checked);
            }
        });

        checkbox.addEventListener('change', () => {
            localStorage.setItem(`day-${i}`, checkbox.checked);
        });

        const savedValue = localStorage.getItem(`day-${i}`);
        if (savedValue !== null) {
            checkbox.checked = JSON.parse(savedValue);
        }
    }
}

createCheckboxes();
