import { loadRecipe, searchRecipes, state } from './model'
import recipeView from './views/recipeView'

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import searchView from './views/searchView'

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

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery()
    if (!query) return

    await searchRecipes(query)
    console.log(state.search.results)
  } catch (error) {
    recipeView.renderError(`💥 An error has occured: ${error}`)
  }
}

controlSearchResults()

const init = function () {
  recipeView.addHandlerRender(renderRecipe)
  searchView.addHandler(controlSearchResults)
}

init()
