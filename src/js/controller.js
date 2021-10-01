import { loadRecipe, state } from './model'
import recipeView from './views/recipeView'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`))
    }, s * 1000)
  })
}

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
    console.error(error)
  }
}

;[('hashchange', 'load')].forEach((event) =>
  window.addEventListener(event, renderRecipe)
)
