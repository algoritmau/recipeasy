import View from './View'
import icons from 'url:../../img/icons.svg'

class SearchResultsView extends View {
  _parentElement = document.querySelector('.results')
  _errorMessage =
    "Sorry, we couldn't find any recipe matching your query. Please try something else."
  _successMessage = ''

  _generateMarkup() {
    return this._data.map(
      (SearchResult) => `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${SearchResult.id}">
          <figure class="preview__fig">
            <img src=${SearchResult.imageUrl} alt=${SearchResult.title} crossOrigin= "anonymous" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${SearchResult.title}</h4>
            <p class="preview__publisher">${SearchResult.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `
    )
  }
}

export default new SearchResultsView()
