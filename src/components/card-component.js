import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

export class CardComponent extends LitElement {
  static styles = css`
  :host {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .card {
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 256px;
    padding: 20px;
    width: 100%;
  }

  .card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .card h2 {
    margin-bottom: 10px;
  }
  `;

  static properties = {
    cards: {},
  };

  constructor() {
    super();
    this.cards = [
      { title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.' },
      { title: 'Card 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.' },
      { title: 'Card 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.' },
      { title: 'Card 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.' },
      { title: 'Card 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.' },
      { title: 'Card 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.' },
    ];
  }

  render() {
    return html`
    ${repeat(
      this.cards,
      (card, index) => html`
      <div class="card" id=${index}>
        <h2>${card.title}</h2>
        <p>${card.content}</p>
      </div>
      `
    )}
    `;
  }
}

customElements.define('card-component', CardComponent);