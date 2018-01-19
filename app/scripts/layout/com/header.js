const Header = new class extends Combo.Component {
	render() {
		return `
			<header class="bloom-section custom-section--header custom-shadow--4">
				<div class="bloom-section__body">
					<img src="images/logo.png" style="max-width: 100%; height:auto">
					<p>
						<a class="bloom-button custom-button--header" href="https://github.com/combojs/combo-js/blob/master/doc/api.md">API</a>
						<a class="bloom-button custom-button--header" href="https://github.com/combojs/combo-seed">Boilerplate</a>
					</p>
				</div>
			</header>
		`;
	}
}();

export { Header };
