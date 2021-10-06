import icons from 'url:../../img/icons.svg'

export default class View {
  _data = null

  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderError()

    this._data = data

    const renderableMarkup = this._generateMarkup()
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', renderableMarkup)
  }

  _clear() {
    this._parentElement.innerHTML = ''
  }

  renderSpinner() {
    const spinnerMarkup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `

    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', spinnerMarkup)
  }

  renderError(error = this._errorMessage) {
    const errorMarkup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${error}</p>
      </div>
    `

    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', errorMarkup)
  }

  renderMessage(message = this._successMessage) {
    const messageMarkup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `

    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', messageMarkup)
  }
}
