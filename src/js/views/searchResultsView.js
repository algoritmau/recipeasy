import View from './View'
import icons from 'url:../../img/icons.svg'

class SearchResultsView extends View {
  _parentElement = document.querySelector('.results')
  _errorMessage =
    "Sorry, we couldn't find any recipe matching your query. Please try something else."
  _successMessage = ''

  _generateMarkup() {
    return this._data.map((searchResult) => {
      const recipeId = window.location.hash.slice(1)
      // TODO: Fix issue with highlighting selected recipe in search results

      return `
      <li class="preview">
        <a class="preview__link ${
          recipeId === searchResult.id ? 'preview__link--active' : ''
        }" href="#${searchResult.id}">
          <figure class="preview__fig">
            <img src=${searchResult.imageUrl} alt=${
        searchResult.title
      } crossOrigin= "anonymous" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${searchResult.title}</h4>
            <p class="preview__publisher">${searchResult.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `
    })
  }
}

export default new SearchResultsView()
