import { API_URL } from './config'
import { renameObjKeys } from './utils/renameObjKeys'
import { getRecipeData } from './utils/utils'

export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
}

export const loadRecipe = async function (recipeId) {
  try {
    const recipeData = await getRecipeData(`${API_URL}${recipeId}`)

    const { recipe } = recipeData.data

    const keysMap = {
      image_url: 'imageUrl',
      source_url: 'sourceUrl',
      cooking_time: 'cookingTime'
    }

    state.recipe = renameObjKeys(keysMap, recipe)
  } catch (error) {
    throw error
  }
}

export const searchRecipes = async function (query) {
  try {
    state.search.query = query

    const searchResults = await getRecipeData(`${API_URL}?search=${query}`)

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
