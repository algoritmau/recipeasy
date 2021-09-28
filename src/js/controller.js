import icons from 'url:../img/icons.svg'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const recipeContainer = document.querySelector('.recipe')

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`))
    }, s * 1000)
  })
}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const renderSpinner = function (parentEl) {
  const spinnerTemplate = `
    <div class="spinner">
      <svg>
        <use href="src/img/icons.svg#icon-loader"></use>
      </svg>
    </div>
  `

  parentEl.innerHTML = ''
  parentEl.insertAdjacentHTML('afterbegin', spinnerTemplate)
}

const renderRecipe = async function () {
  // Loading recipe data
  try {
    renderSpinner(recipeContainer)

    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    )
    const data = await res.json()

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`)
    }

    let { recipe } = data.data

    // const renameObjectProps = (
    //   oldPropName,
    //   newPropName,
    //   { [oldPropName]: oldObj, ...otherProps }
    // ) => ({
    //   [newPropName]: oldObj,
    //   ...otherProps
    // })

    // let sanitizedRecipe = renameObjectProps('image_url', 'imageUrl', recipe)

    let sanitizedRecipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      imageUrl: recipe.image_url,
      sourceUrl: recipe.source_url,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      ingredients: recipe.ingredients
    }

    // Rendering recipe data
    const recipeTemplate = `
      <figure class="recipe__fig">
        <img src="${sanitizedRecipe.imageUrl}" alt="${
      sanitizedRecipe.title
    }" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            sanitizedRecipe.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            sanitizedRecipe.servings
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${sanitizedRecipe.ingredients
            .map(
              (ingredient) => `
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${icons}#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${
                    ingredient.quantity || ''
                  }</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${ingredient.unit}</span>
                    ${ingredient.description}
                  </div>
                </li>
            `
            )
            .join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            sanitizedRecipe.publisher
          }</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${sanitizedRecipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `

    recipeContainer.insertAdjacentHTML('afterbegin', recipeTemplate)

    console.log(sanitizedRecipe)
  } catch (error) {
    console.log(error)
  }
}

renderRecipe()
