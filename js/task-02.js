const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ulList = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.textContent = ingredient;
//     ulList.appendChild(itemEl);
// });

const makeIngredientsList = ingredients => {
    return ingredients.map(ingredient => {
      const itemEl = document.createElement('li');
      itemEl.textContent = ingredient;
      return itemEl;
    });
  };
  
  const ingredientsList = makeIngredientsList(ingredients);
  ulList.append(...ingredientsList);

