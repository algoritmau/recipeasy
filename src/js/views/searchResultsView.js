import View from './View'
import previewView from './previewView'

class SearchResultsView extends View {
  _parentElement = document.querySelector('.results')
  _errorMessage =
    "Sorry, we couldn't find any recipe matching your query. Please try something else."
  _successMessage = ''

  _generateMarkup() {
    return this._data
      .map((searchResult) => previewView.render(searchResult, false))
      .join('')
  }
}

export default new SearchResultsView()
