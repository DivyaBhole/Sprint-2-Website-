document.addEventListener('DOMContentLoaded', () => {
    const recipes = document.querySelectorAll('.recipe');
    const recipeDetailsSection = document.getElementById('recipe-details');
    const recipeTitleElem = document.getElementById('recipeTitle');
    const recipeImageElem = document.getElementById('recipeImage');
    const recipeDescriptionElem = document.getElementById('recipeDescription');
    const closeBtn = document.getElementById('closeBtn');

    // Function to show recipe details
    function showRecipeDetails(title, image, description) {
        recipeTitleElem.textContent = title;
        recipeImageElem.src = image;
        recipeDescriptionElem.textContent = description;

        recipeDetailsSection.style.display = 'block';
        recipeDetailsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Event listeners for each recipe button
    recipes.forEach(recipe => {
        const showRecipeBtn = recipe.querySelector('.show-recipe-btn');
        
        showRecipeBtn.addEventListener('click', () => {
            const title = showRecipeBtn.getAttribute('data-title');
            const image = showRecipeBtn.getAttribute('data-image');
            const description = showRecipeBtn.getAttribute('data-description');

            showRecipeDetails(title, image, description);
        });
    });

    // Close button event listener
    closeBtn.addEventListener('click', () => {
        recipeDetailsSection.style.display = 'none';
    });
});
