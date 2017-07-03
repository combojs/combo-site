// ## Banner Partial
//
// Contains the markup for the Home page banner.
//
var FeaturePartial = new class extends Combo.Component {
	render() {
		return `
			<section class="bloom-section custom-section-feature">
				<div class="bloom-section__body">
					<div class="bloom-grid">
						<div class="bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1">
							<h2>Minimalistic</h2>
							<p>Minimalistic in a good way.</p>
						</div>
						<div class="bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1">
							<h2>Lightweight</h2>
							<p>Combo is approximately 1KB when minified and gzipped. This means the framework will load chop-chop.</p>
						</div>
						<div class="bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1">
							<h2>No Bullshit</h2>
							<p>No need to learn JSX. Combo uses ES2015 template literals render your components. You're welcome.</p>
						</div>
					</div>
				</div>
			</section>
		`;
	}
}();
