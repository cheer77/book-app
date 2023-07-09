import { DivComponent } from '../../common/div-component';
// import { Card } from '../card-list/card-list.js';
import './card-list.css';

export class CardList extends DivComponent {
	constructor(appState, parentState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	render() {
		if (this.parentState.loading) {
			this.el.innerHTML = `<div class="card_list__loader">Завантаження чогось цікавенького...</div>`;
			return this.el;
		}

		this.el.classList.add('card_list');
		this.el.innerHTML = `
      <h1>Знайдено книжок - ${this.parentState.list.length} шту${
			this.parentState.list.length === 1
				? 'ка'
				: this.parentState.list.length >= 2 && this.parentState.list.length <= 4
				? 'ки'
				: 'к'
		}</h1>
    `;

		// const cardGrid = document.createElement('div');
		// cardGrid.classList.add('card_grid');
		// this.el.append(cardGrid);
		// for (const card of this.parentState.list) {
		// 	cardGrid.append(new Card(this.appState, card).render());
		// }
		return this.el;
	}
}
