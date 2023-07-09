import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
	constructor(state) {
		super();
		this.state = state;
	}

	render() {
		this.el.classList.add('search');
		this.el.innerHTML = `
    <div class="search__wrapper">
      <input
        type="text"
        placeholder="Шукати книгу чи автора...."
        class="search__input"
        value="${this.state.searchQuery ? this.state.searchQuery : ''}"
      />
      <img src="/static/search.svg" alt="Иконка пошука" />
    </div>
    <button aria-label="Шукати"><img src="/static/search-white.svg" alt="Иконка пошука" /></button>
  `;

		return this.el;
	}
}
