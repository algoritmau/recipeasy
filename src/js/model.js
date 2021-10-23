import { API_KEY, API_URL, SEARCH_RESULTS_PER_PAGE } from './config'
import { renameObjKeys } from './utils/renameObjKeys'
import { doAjaxRequest } from './utils/utils'

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: SEARCH_RESULTS_PER_PAGE
  },
  bookmarks: []
}

export const loadRecipe = async function (recipeId) {
  try {
    const recipeData = await doAjaxRequest(
      `${API_URL}${recipeId}?key=${API_KEY}`
    )

    const { recipe } = recipeData.data

    const keysMap = {
      image_url: 'imageUrl',
      source_url: 'sourceUrl',
      cooking_time: 'cookingTime'
    }

    state.recipe = renameObjKeys(keysMap, recipe)

    if (state.bookmarks.some((bookmark) => bookmark.id === recipeId)) {
      state.recipe.isBookmarked = true
    } else {
      state.recipe.isBookmarked = false
    }
  } catch (error) {
    throw error
  }
}

export const searchRecipes = async function (query) {
  try {
    state.search.query = query

    const searchResults = await doAjaxRequest(
      `${API_URL}?search=${query}&key=${API_KEY}`
    )

    state.search.results = searchResults.data.recipes

    // Sanitize property name
    state.search.results.forEach((recipe) => {
      recipe.imageUrl = recipe.image_url
      delete recipe.image_url
    })
  } catch (error) {
    throw error
  }
}

export const paginateSearchedRecipes = function (page) {
  state.search.page = page

  const start = (page - 1) * 10
  const end = start + 10

  return state.search.results.slice(start, end)
}

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(
    (ingredient) =>
      (ingredient.quantity = Math.round(
        (ingredient.quantity * newServings) / state.recipe.servings
      ))
  )

  state.recipe.servings = newServings
}

export const bookmarkRecipe = function (recipe) {
  state.bookmarks.push(recipe)

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) {
    state.recipe.isBookmarked = true
  }

  persistBookmarks()
}

export const unbookmarkRecipe = function (recipeId) {
  const index = state.bookmarks.findIndex((recipe) => recipe.id === recipeId)

  state.bookmarks.splice(index, 1)

  // Mark current recipe as not bookmarked
  if (recipeId === state.recipe.id) state.recipe.isBookmarked = false

  persistBookmarks()
}

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
}

const getPersistedBookmarks = function () {
  const bookmarks = localStorage.getItem('bookmarks')

  if (bookmarks) {
    state.bookmarks = JSON.parse(bookmarks)
  }
}

getPersistedBookmarks()

export const uploadRecipe = async function (recipeData) {
  try {
    const ingredients = Object.entries(recipeData)
      .filter((entry) => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map((ingredient) => {
        const ingredientsArray = ingredient[1].trim().split(',')
        const [quantity, unit, description] = ingredientsArray

        if (ingredientsArray.length !== 3)
          throw new Error(
            '❌ Invalid ingredient format. Please use the correct format to submit a recipe.'
          )

        return { quantity: quantity ? +quantity : null, unit, description }
      })

    const recipe = {
      title: recipeData.title,
      source_url: recipeData.sourceUrl,
      image_url: recipeData.image,
      publisher: recipeData.publisher,
      cooking_time: +recipeData.cookingTime,
      servings: +recipeData.servings,
      ingredients,
      key: recipeData.key
    }
    const { data } = await doAjaxRequest(`${API_URL}?key=${API_KEY}`, recipe)
    const uploadedRecipe = data.recipe
    const keysMap = {
      image_url: 'imageUrl',
      source_url: 'sourceUrl',
      cooking_time: 'cookingTime'
    }

    state.recipe = renameObjKeys(keysMap, uploadedRecipe)
    bookmarkRecipe(state.recipe)
  } catch (error) {
    throw error
  }
}
