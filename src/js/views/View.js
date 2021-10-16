import icons from 'url:../../img/icons.svg'

export default class View {
  _data = null

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderError()

    this._data = data

    const renderableMarkup = this._generateMarkup()

    if (!render) return renderableMarkup

    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', renderableMarkup)
  }

  update(data) {
    this._data = data

    const updatedMarkup = this._generateMarkup()
    const newDOM = document
      .createRange()
      .createContextualFragment(updatedMarkup)
    const updatedElements = Array.from(newDOM.querySelectorAll('*'))
    const currentElements = Array.from(
      this._parentElement.querySelectorAll('*')
    )

    updatedElements.forEach((updatedElement, i) => {
      const currentElement = currentElements[i]

      // Changing text-based content
      if (
        !updatedElement.isEqualNode(currentElement) &&
        updatedElement.firstChild?.nodeValue.trim() !== ''
      ) {
        currentElement.textContent = updatedElement.textContent
      }

      // Updating attributes
      if (!updatedElement.isEqualNode(currentElement)) {
        const updatedAttributes = Array.from(updatedElement.attributes)

        updatedAttributes.forEach((updatedAttribute) => {
          currentElement.setAttribute(
            updatedAttribute.name,
            updatedAttribute.value
          )
        })
      }
    })
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
