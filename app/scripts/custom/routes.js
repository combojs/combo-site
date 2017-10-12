// # routes
//
// Defines the routes in the router. LayoutPage must mount first.
//
LayoutPage.mount(document.getElementById("root"));

routie({
	"": function() {
		$reset("#drawer");
		AboutPage.mount(document.getElementById("content"));
	},	
	"/about": function() {
		$reset("#drawer");
		AboutPage.mount(document.getElementById("content"));
	},	
	"/sessions": function() {
		$reset("#drawer");
		SessionsPage.mount(document.getElementById("content"));
	},
	"/downloads": function() {
		$reset("#drawer");
		DownloadsPage.mount(document.getElementById("content"));
	},
	"/gallery": function() {
		$reset("#drawer");
		GalleryPage.mount(document.getElementById("content"));
	},
	"/subscribe": function() {
		$reset("#drawer");
		SubscribePage.mount(document.getElementById("content"));
	}
});
