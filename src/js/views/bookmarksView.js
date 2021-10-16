import View from './View'
import previewView from './previewView'

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list')
  _errorMessage =
    'Nothing to see here yet. Find your favorite recipes and bookmark them!'
  _successMessage = ''

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join('')
  }
}

export default new BookmarksView()
