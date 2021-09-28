const recipeContainer = document.querySelector('.recipe')

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`))
    }, s * 1000)
  })
}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const getRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    )
    const data = await res.json()

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`)
    }

    let { recipe } = data.data

    // const renameObjectProps = (
    //   oldPropName,
    //   newPropName,
    //   { [oldPropName]: oldObj, ...otherProps }
    // ) => ({
    //   [newPropName]: oldObj,
    //   ...otherProps
    // })

    // let sanitizedRecipe = renameObjectProps('image_url', 'imageUrl', recipe)

    let sanitizedRecipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      imageUrl: recipe.image_url,
      sourceUrl: recipe.source_url,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }

    console.log(sanitizedRecipe)
  } catch (error) {
    console.log(error)
  }
}

getRecipe()
