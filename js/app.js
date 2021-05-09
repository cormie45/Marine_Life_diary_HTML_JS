document.addEventListener('DOMContentLoaded', () => {
    const newDiaryEntry = document.querySelector('#diary-entry-form');
    newDiaryEntry.addEventListener('submit', handleDiaryFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll);
  })

const handleDiaryFormSubmit = function (event) {
    event.preventDefault();
    const diaryItem = createDiaryItem(event.target);
    const diary = document.querySelector('#sightings-diary');
    diary.appendChild(diaryItem);
    event.target.reset();
}

const createDiaryItem = function (form) {
    const diaryItem = document.createElement('li');
    diaryItem.classList.add('sightings-diary-item');
  
    const species = document.createElement('h3');
    species.textContent = form.species.value;
    diaryItem.appendChild(species);

    const description = document.createElement('p');
    description.textContent = form.description.value;
    diaryItem.appendChild(description);

    const divesite = document.createElement('p');
    divesite.textContent = form.divesite.value;
    diaryItem.appendChild(divesite);
  
    const classification = document.createElement('p');
    classification.textContent = form.classification.value;
    diaryItem.appendChild(classification);
  
    const date = document.createElement('p');
    date.textContent = form.date.value;
    diaryItem.appendChild(date);
  
    return diaryItem;
  }

const handleDeleteAll = function (event) {
    const diary = document.querySelector('#sightings-diary');
    diary.innerHTML = '';
}