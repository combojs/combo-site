const Example = new class extends Combo.Component {
	render() {
		return `
			<div class="bloom-section custom-section--example">
				<div class="bloom-section__body">
					<h1 class="custom-example">Quick Example</h1>

					<iframe height='325' scrolling='no' title='Hello Combo' src='//codepen.io/combojs/embed/BJvvyq/?height=265&theme-id=dark&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/combojs/pen/BJvvyq/'>Hello Combo</a> by combojs (<a href='https://codepen.io/combojs'>@combojs</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

					<p class="custom-margin--s">
						<a class="bloom-button" href="https://github.com/combojs/combo-examples">More Examples</a>
					</p>
				</div>
			</div>
		`;
	}
}();

export { Example };
