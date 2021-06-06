// Считает и выводит в консоль количество категорий в ul#categories, то есть элементов li.item

const categoriesEl = document.querySelectorAll('.item');

console.log(`В списке ${categoriesEl.length} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

categoriesEl.forEach(category => 
    {
        console.log(`Категория: ${category.querySelector('h2').textContent}`);
        console.log(`Количество элементов: ${category.querySelectorAll('li').length}`);
    }
);

