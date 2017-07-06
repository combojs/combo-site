// ## FooterPartial
//
// Contains the markup for the Home page footer.
//
var FooterPartial = new class extends Combo.Component {
	render() {
		return `
			<footer class="bloom-section custom-section-footer">
				<div class="bloom-section__body">
					<p>Released under the <a class="custom-plain-link" href="https://opensource.org/licenses/MIT">MIT License</a></p>
					<p>Copyright &copy 2016-2017; Eric Harms</p>
				</div>
			</footer>
		`;
	}
}();
