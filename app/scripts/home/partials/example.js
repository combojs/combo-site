// ## BannerPartial
//
// Contains the markup for the Home page example section.
//
var ExamplePartial = new class extends Combo.Component {
	render(url) {
		return `
			<section class="bloom-section custom-section-example">
				<div class="bloom-section__body">
					<h2>A Quick Example</h2>
					<img src="images/example.png" alt="example" class="bloom-image ( -fluid )">
					<p>
						<a class="bloom-button" href="https://codepen.io/combojs/pen/gRjJPN">
							Run on CodePen
						</a>
					</p>
				</div>
			</section>
		`;
	}
}();
