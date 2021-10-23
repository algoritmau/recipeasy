import View from './View'

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload')
  _addRecipeWindow = document.querySelector('.add-recipe-window')
  _overlay = document.querySelector('.overlay')
  _btnOpenModal = document.querySelector('.nav__btn--add-recipe')
  _btnCloseModal = document.querySelector('.btn--close-modal')
  _successMessage = 'Your recipe has been successfully uploaded.'

  constructor() {
    super()
    this._addOpenModalHandler()
    this._addCloseModalHandler()
  }

  toggleModal() {
    this._overlay.classList.toggle('hidden')
    this._addRecipeWindow.classList.toggle('hidden')
  }

  _addOpenModalHandler() {
    this._btnOpenModal.addEventListener('click', this.toggleModal.bind(this))
  }

  _addCloseModalHandler() {
    this._btnCloseModal.addEventListener('click', this.toggleModal.bind(this))
    this._overlay.addEventListener('click', this.toggleModal.bind(this))
  }

  addUploadRecipeHandler(handler) {
    this._parentElement.addEventListener('submit', (e) => {
      e.preventDefault()

      const formData = Object.fromEntries([...new FormData(e.target)])

      handler(formData)
    })
  }

  _generateMarkup() {}
}

export default new AddRecipeView()
