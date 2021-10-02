import { loadRecipe, state } from './model'
import recipeView from './views/recipeView'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

// https://forkify-api.herokuapp.com/v2

const renderRecipe = async function () {
  try {
    const recipeId = window.location.hash.slice(1)
    console.log('Recipe ID......')
    console.log(recipeId)

    if (!recipeId) return

    recipeView.renderSpinner()

    // Loading recipe data
    await loadRecipe(recipeId)

    // Rendering recipe data
    recipeView.render(state.recipe)
  } catch (error) {
    console.error(error)
  }
}

;[('load', 'hashchange')].forEach((event) =>
  window.addEventListener(event, renderRecipe)
)
