// ## BannerPartial
//
// Contains the markup for the Home page banner.
//
var BannerPartial = new class extends Combo.Component {
	render() {
		return `
			<section class="bloom-section custom-section-banner">
				<div class="bloom-section__body">
					<img alt="Logo" src="images/logo.png" alt="logo">
					<h1 class="custom-hero">Combo.js</h1>
					<p class="custom-lead">A lightweight library for creating user interfaces.</p>
					<p>
						<a href="https://github.com/combojs/combo-js/blob/master/doc/learn.md" class="bloom-button custom-button-ghost">Learn</a>
						<a href="https://github.com/combojs/combo-js" class="bloom-button custom-button-ghost">GitHub</a>						
					</p>
				</div>
			</section>
		`;
	}
}();
