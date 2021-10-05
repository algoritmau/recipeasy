import { loadRecipe, searchRecipes, state } from './model'
import recipeView from './views/recipeView'
import searchView from './views/searchView'
import searchResultsView from './views/searchResultsView'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

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
    searchResultsView.renderSpinner()

    const query = searchView.getQuery()
    if (!query) return

    await searchRecipes(query)

    searchResultsView.render(state.search.results)
  } catch (error) {
    recipeView.renderError(`💥 An error has occured: ${error}`)
  }
}

const init = function () {
  recipeView.addHandlerRender(renderRecipe)
  searchView.addHandler(controlSearchResults)
}

init()
