import {
  bookmarkRecipe,
  loadRecipe,
  paginateSearchedRecipes,
  searchRecipes,
  state,
  unbookmarkRecipe,
  updateServings
} from './model'
import recipeView from './views/recipeView'
import searchView from './views/searchView'
import searchResultsView from './views/searchResultsView'
import paginationView from './views/paginationView'
import bookmarksView from './views/bookmarksView'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const renderRecipe = async function () {
  try {
    const recipeId = window.location.hash.slice(1)

    if (!recipeId) return

    recipeView.renderSpinner()

    // Update results view to highlight selected recipe
    searchResultsView.update(paginateSearchedRecipes())
    bookmarksView.update(state.bookmarks)

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

  recipeView.update(state.recipe)
}

const controlRecipeBookmarking = () => {
  if (!state.recipe.isBookmarked) {
    bookmarkRecipe(state.recipe)
  } else {
    unbookmarkRecipe(state.recipe.id)
  }

  recipeView.update(state.recipe)

  // Update recipe view to render bookmarked recipes
  bookmarksView.render(state.bookmarks)
}

const init = () => {
  recipeView.addHandlerRender(renderRecipe)
  searchView.addHandler(controlSearchResults)
  paginationView.addClickHandler(controlPagination)
  recipeView.addUpdateServingsHandler(controlServings)
  recipeView.addRecipeBookmarkHandler(controlRecipeBookmarking)
}

init()
