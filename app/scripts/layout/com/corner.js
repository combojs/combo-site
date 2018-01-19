const Corner = new class extends Combo.Component {
	render() {
		return `
			<a class="custom-corner" href="https://github.com/combojs">
				<img alt="fork" src="images/fork.png">
			</a>
		`;
	}
}();

export { Corner };
