const form = document.querySelector('.form');
const ratingComponent = document.querySelectorAll('.rating-component');
const selectionTxt = document.querySelector('.selection-text');
const ratingSection = document.querySelector('.rating-section');
const backSection = document.querySelector('.back-section');

form.addEventListener('submit', handleSubmit)
form.addEventListener('submit', showBack)

function handleSubmit(e) {
    e.preventDefault();

    let ratingValue;
    ratingComponent.forEach(component => {
        if (component.checked) {
            ratingValue = component.value;
        }
    });
    selectionTxt.textContent = `You selected ${ratingValue} out of 5`
}

function showBack(e) {
    e.preventDefault();

    ratingSection.classList.remove('shown-card');
    ratingSection.classList.add('hidden-card');

    backSection.classList.add('shown-card');
    backSection.classList.remove('hidden-card');
}