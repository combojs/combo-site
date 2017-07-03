// ## Banner Partial
//
// Contains the markup for the Home page banner.
//
var ExamplePartial = new class extends Combo.Component {
	render() {
		return `
			<section class="bloom-section custom-section-example">
				<div class="bloom-section__body">
					<p><img class="bloom-image ( -fluid )" src="images/example.png"></p>
				</div>
			</section>
		`;
	}
}();
