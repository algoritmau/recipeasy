import { renameObjKeys } from './utils/renameObjKeys'

export const state = {}
export const loadRecipe = async function (recipeId) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
    )
    const data = await res.json()

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`)
    }

    const { recipe } = data.data

    const keysMap = {
      image_url: 'imageUrl',
      source_url: 'sourceUrl',
      cooking_time: 'cookingTime'
    }

    state.recipe = renameObjKeys(keysMap, recipe)
  } catch (error) {
    alert(`Error loading recipe (${error})`)
  }
}
