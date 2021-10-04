class SearchView {
  #parentEl = document.querySelector('.search')
  #searchField = this.#parentEl.querySelector('.search__field')

  getQuery() {
    const query = this.#searchField.value

    this.#clearInput()

    return query
  }

  #clearInput() {
    this.#searchField.value = ''
  }

  addHandler(handler) {
    this.#parentEl.addEventListener('submit', function (event) {
      event.preventDefault()
      handler()
    })
  }
}

export default new SearchView()
