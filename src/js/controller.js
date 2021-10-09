import {
  loadRecipe,
  paginateSearchedRecipes,
  searchRecipes,
  state,
  updateServings
} from './model'
import recipeView from './views/recipeView'
import searchView from './views/searchView'
import searchResultsView from './views/searchResultsView'
import paginationView from './views/paginationView'

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

    searchResultsView.render(paginateSearchedRecipes(1))

    paginationView.render(state.search)
  } catch (error) {
    recipeView.renderError(`💥 An error has occured: ${error}`)
  }
}

const controlPagination = (page) => {
  searchResultsView.render(paginateSearchedRecipes(page))
  paginationView.render(state.search)
}

const controlServings = (newServings) => {
  updateServings(newServings)

  recipeView.render(state.recipe)
}

const init = () => {
  recipeView.addHandlerRender(renderRecipe)
  searchView.addHandler(controlSearchResults)
  paginationView.addClickHandler(controlPagination)
  recipeView.addUpdateServingsHandler(controlServings)
}

init()
