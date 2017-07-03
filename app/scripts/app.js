// ## app
//
// Define application-level variables and methods below.
//

// Render the HomeScene.
//
Combo.render(document.getElementById("root"), `
	${BannerPartial.render()}
	${FeaturePartial.render()}
	${ExamplePartial.render()}
	${FooterPartial.render()}
`);
