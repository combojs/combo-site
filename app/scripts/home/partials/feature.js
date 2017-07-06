// ## FeaturePartial
//
// Contains the markup for the Home page's feature section.
//
var FeaturePartial = new class extends Combo.Component {
	render() {
		return `
			<section class="bloom-section custom-section-feature">
				<div class="bloom-section__body">
					<div class="bloom-grid">
						<div class="bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1">
						<img src="images/cog.png">
							<h2>Component-based</h2>
							<p style="text-align:left">Design interactive user interfaces from small components that encapsulate the template and logic.</p>
						</div>
						<div class="bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1">
							<img src="images/balance.png">
							<h2>Lightweight</h2>
							<p style="text-align:left">Combo is approximately 1KB when minified and gzipped. This means the framework will load chop-chop.</p>
						</div>
						<div class="bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1">
							<img src="images/poo.png">
							<h2>No Bullshit</h2>
							<p style="text-align:left">No need to learn JSX or TypeScript. Combo uses ES2015 template literals render your user interfaces.</p>
						</div>
					</div>
				</div>
			</section>
		`;
	}
}();
