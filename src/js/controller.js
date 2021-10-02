import { loadRecipe, state } from './model'
import recipeView from './views/recipeView'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

// https://forkify-api.herokuapp.com/v2

const renderRecipe = async function () {
  try {
    const recipeId = window.location.hash.slice(1)

    if (!recipeId) return

    recipeView.renderSpinner()

    // Loading recipe data
    await loadRecipe(recipeId)

    // Rendering recipe data
    recipeView.render(state.recipe)
  } catch (error) {
    recipeView.renderError(`💥 An error has occured: ${error}`)
  }
}

const init = function () {
  recipeView.addHandlerRender(renderRecipe)
}

init()
