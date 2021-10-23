import { TIMEOUT_SECONDS } from '../config'

export const doAjaxRequest = async (url, recipeData = null) => {
  try {
    const fetchPromise = recipeData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipeData)
        })
      : fetch(url)
    const response = await Promise.race([
      fetchPromise,
      timeout(TIMEOUT_SECONDS)
    ])
    const data = await response.json()

    if (!response.ok) {
      throw new Error(`${data.message} (${response.status})`)
    }

    return data
  } catch (error) {
    throw error
  }
}

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timed out after ${s} seconds`))
    }, s * 1000)
  })
}
