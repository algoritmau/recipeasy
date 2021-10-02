import { API_URL } from './config'
import { renameObjKeys } from './utils/renameObjKeys'
import { getRecipeData } from './utils/utils'

export const state = {}
export const loadRecipe = async function (recipeId) {
  try {
    const recipeData = await getRecipeData(`${API_URL}/${recipeId}`)

    const { recipe } = recipeData.data

    const keysMap = {
      image_url: 'imageUrl',
      source_url: 'sourceUrl',
      cooking_time: 'cookingTime'
    }

    state.recipe = renameObjKeys(keysMap, recipe)
  } catch (error) {
    console.error(`🤯 Error loading recipe: (${error})`)
  }
}
