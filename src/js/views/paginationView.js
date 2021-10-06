import View from './View'
import icons from 'url:../../img/icons.svg'

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination')

  addClickHandler(handler) {
    this._parentElement.addEventListener('click', (event) => {
      const clickedButton = event.target.closest('.pagination__btn')

      if (!clickedButton) return

      const pageToGo = +clickedButton.dataset.pagetogo

      handler(pageToGo)
    })
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    )
    const currentPage = this._data.page

    // First page of many
    if (numPages > 1 && currentPage === 1) {
      return `
        <button data-pagetogo="${
          currentPage + 1
        }" class="btn--inline pagination__btn pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `
    }

    // Middle page of many
    if (numPages > 1 && currentPage > 1 && currentPage < numPages) {
      return `
        <button data-pagetogo="${
          currentPage - 1
        }" class="btn--inline pagination__btn pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
        <button data-pagetogo="${
          currentPage + 1
        }" class="btn--inline pagination__btn pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `
    }

    // Last page of many
    if (numPages > 1 && currentPage === numPages) {
      return `
        <button data-pagetogo="${
          currentPage - 1
        }" class="btn--inline pagination__btn pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
      `
    }

    // One and only page
    return ''

    // TODO: Abstract this logic into a function
    // const generatePageButtonMarkup = (pageNum, isNext) => `
    //   <button class="btn--inline pagination__btn--${isNext ? 'next' : 'prev'}">
    //     <svg class="search__icon">
    //       <use href="${icons}#icon-arrow-${isNext ? 'right' : 'left'}"></use>
    //     </svg>
    //     <span>Page ${currentpage - 1}</span>
    //   </button>
    // `
  }
}

export default new PaginationView()
