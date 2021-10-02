import { TIMEOUT_SECONDS } from '../config'

export const getRecipeData = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)])
    const data = await res.json()

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`)
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
