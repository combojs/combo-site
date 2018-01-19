const Features = new class extends Combo.Component {
	_items() {
		return this.data.items.map((item) => {
			return `
				<div class="bloom-grid__item bloom-width-1-${this._count()} bloom-medium-width-1-1">
					<div class="custom-block custom-block--feature">
						<img src="${item.image}" class="custom-shadow--4">
						<h1>${item.title}</h1>
					</div>

					<p>${item.text}</p>
				</div>
			`;
		}).join("");
	}
	_count() {
		return this.data.items.length;
	}
	render() {
		return `
			<div class="bloom-section custom-section--features">
				<div class="bloom-section__body">
					<div class="bloom-grid">
						${this._items()}
					</div>
				</div>
			</div>
		`;
	}
}();

export { Features };
