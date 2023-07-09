import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
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
		const cardGrid = document.createElement('div');
		cardGrid.classList.add('card_grid');
		this.el.append(cardGrid);
		for (const card of this.parentState.list) {
			cardGrid.append(new Card(this.appState, card).render());
		}
		return this.el;
	}
}
