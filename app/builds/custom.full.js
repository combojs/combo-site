"use strict";

// ## AboutPage
//
// Represents the About page. Mounts to #content.
//
var AboutPage = new Combo.Component({
    render: function render() {
        return "\n        \t" + BannerComponent.render() + "\n        \t<div class=\"mat-section mat-section--xl\" style=\"margin-top: -6rem;\">\n        \t\t<div class=\"mat-section__body\">\n        \t\t\t<div class=\"mat-grid mat-grid--1-1 mat-grid--l-1-3\">\n        \t\t\t\t<div class=\"mat-grid__item\">\n        \t\t\t\t\t<div class=\"mat-block mat-block--s mat--align-center\">\n        \t\t\t\t\t\t<img class=\"mat-block__image custom-media--round\" src=\"/images/cog.png\">\n        \t\t\t\t\t\t<h2 class=\"mat--type-headline\">Component-based</h2>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t\t<p>Design interactive user interfaces from small components that encapsulate the template and logic.</p>\n\t\t\t\t\t\t</div>\n        \t\t\t\t<div class=\"mat-grid__item\">\n        \t\t\t\t\t<div class=\"mat-block mat-block--s mat--align-center\">\n        \t\t\t\t\t\t<img class=\"mat-block__image custom-media--round\" src=\"/images/balance.png\">\n        \t\t\t\t\t\t<h2 class=\"mat--type-headline\">Lightweight</h2>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t\t<p>Combo is approximately 1KB when minified and gzipped. This means the framework will load chop-chop.</p>\n\t\t\t\t\t\t</div>\n        \t\t\t\t<div class=\"mat-grid__item\">\n        \t\t\t\t\t<div class=\"mat-block mat-block--s mat--align-center\">\n        \t\t\t\t\t\t<img class=\"mat-block__image custom-media--round\" src=\"/images/poo.png\">\n        \t\t\t\t\t\t<h2 class=\"mat--type-headline\">No Bullshit</h2>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t\t<p>No need to learn JSX. Combo uses standard ES2015 template literals to render your user interfaces. You're welcome.</p> \n\t\t\t\t\t\t</div>\n    \t\t\t\t</div>\n\t\t\t\t</div>    \t\t\t\t\n    \t\t</div>\n\n        \t<div class=\"mat-section mat-section--xl mat--color-accent\">\n        \t\t<div class=\"mat-section__body\">\n    \t\t\t\t<div class=\"mat-grid mat-grid--1-1 mat-grid--l-1-3\">\n        \t\t\t\t<div class=\"mat-grid__item\">\t\t\t\t\n                    <h1 class=\"mat--type-headline mat-box mat-box--s mat--color-secondary\">Quick Start</h1>                                        \n        \t\t\t\t\t<h2 class=\"mat--type-title\">Rendering</h2>\n                            Each component needs a render method. This method returns a template literal that contains what to display.</p>\n        \t\t\t\t</div>\n        \t\t\t\t<div class=\"mat-grid__item mat-grid__item--auto\">\n        \t\t\t\t\t" + ExampleComponent.render("pWWJoG") + "\n        \t\t\t\t</div>        \t\t\t\t\n    \t\t\t\t</div>\n                </div>\n            </div>\n            \n            <div class=\"mat-section mat-section--xl\">\n                <div class=\"mat-section__body\">\n                    <div class=\"mat-grid mat-grid--1-1 mat-grid--l-1-3\">\n                        <div class=\"mat-grid__item\">                \n                            <h2 class=\"mat--type-title\">Mounting</h2>\n                            <p>The root component need to be mounted to a container element using the mount() method.</p>\n                        </div>\n                        <div class=\"mat-grid__item mat-grid__item--auto\">\n                            " + ExampleComponent.render("BwPmwL") + "\n                        </div>                      \n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"mat-section mat-section--xl mat--color-accent\">\n                <div class=\"mat-section__body\">\n        \t\t\t<div class=\"mat-grid mat-grid--1-1 mat-grid--l-1-3\">\n        \t\t\t\t<div class=\"mat-grid__item\">\n        \t\t\t\t\t<h2 class=\"mat--type-title\">Properties</h2>\n        \t\t\t\t\t<p>Properties can be updated using the update() method. If the component was mounted, it is redrawn on an update.</p>\n        \t\t\t\t</div>\n        \t\t\t\t<div class=\"mat-grid__item mat-grid__item--auto\">\n        \t\t\t\t\t" + ExampleComponent.render("KXXVLr") + "\n        \t\t\t\t</div>        \t\t\t\t\n    \t\t\t\t</div>\n                </div>\n            </div>\n                \n            <div class=\"mat-section mat-section--xl\">\n                <div class=\"mat-section__body\">\n        \t\t\t<div class=\"mat-grid mat-grid--1-1 mat-grid--l-1-3\">\n        \t\t\t\t<div class=\"mat-grid__item\">\n        \t\t\t\t\t<h2 class=\"mat--type-title\">Child Components</h2>\n        \t\t\t\t\t<p>Child components are rendered by calling their render() method from a template literal. They are usually unmounted.</p>\n\n        \t\t\t\t</div>\n        \t\t\t\t<div class=\"mat-grid__item mat-grid__item--auto\">\n        \t\t\t\t\t" + ExampleComponent.render("yzELgE") + "\n        \t\t\t\t</div>        \t\t\t\t\n    \t\t\t\t</div>\n        \t\t</div>\n    \t\t</div>\n        ";
    }
});

// ## HomePage
//
// Represents the Banner component. Does not mount.
//
var BannerComponent = new Combo.Component({
    created: function created() {
        this.update({
            links: []
        });
    },
    render: function render() {
        var links = this.data.links.map(function (item) {
            return "\n\t\t\t\t<a href=\"" + item.url + "\" class=\"mat-button custom-button--banner\">" + item.text + "</a>\n\t\t\t";
        }).join("");

        return "\n\t\t\t<section class=\"mat-section mat-section--xl mat--shadow-4 mat--color-primary mat--align-center\">\n\t\t\t\t<div class=\"mat-section__body\">\n\t\t\t\t\t<div class=\"mat-block mat-block--xs\" style=\"margin-bottom:1.5em\">\n\t\t\t\t\t\t<img class=\"mat-block__image\" src=\"/images/glove.svg\" alt=\"Logo\">\n\t\t\t\t\t\t<div class=\"mat--type-display-2 custom-type--hero\">Combo</div>\n\t\t\t\t\t\t<div class=\"mat--type-headline custom-type--tagline\">A lightweight library for creating user interfaces.</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<p>" + links + "</p>\n\t\t\t\t</div>\n\t\t\t</section>\t\t\t\n\t\t";
    }
});
// ## ExampleComponent
//
// Represents the Example component. Does not mount.
//
var ExampleComponent = new Combo.Component({
    render: function render(pen) {
        return "\n            <iframe height='265' scrolling='no' title='A Simple Component' src='//codepen.io/combojs/embed/" + pen + "/?height=265&theme-id=31541&default-tab=js&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>\n        ";
    }
});

// # HeaderComponent
//
// Represents the Header component.
// 
var HeaderComponent = new Combo.Component({
    created: function created() {
        this.update({
            links: []
        });
    },
    render: function render() {
        var links = this.data.links.map(function (item) {
            return "\n                <a class=\"mat-menu__link\" href=\"" + item.url + "\"><small>" + item.text + "</small></a>\n            ";
        }).join("");

        return "\n\t\t\t<header class=\"mat-dock mat-dock--t mat-section mat--color-primary\" style=\"background-color: #A20039\" role=\"banner\">\n\t\t\t\t<div class=\"mat-section__body\">\n\t\t\t\t\t<div class=\"mat-header\">\n\t\t\t\t\t\t<div class=\"mat-header__item\">\n\t\t\t\t\t\t\t<nav class=\"mat-menu\">\n\t\t\t\t\t\t\t\t<a class=\"mat-menu__link\" href=\"javascript:$toggle('#drawer')\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons mat-toolbar__icon\">menu</i> Combo\n\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t<div class=\"mat-header__item\">\n\t\t\t\t\t\t\t<nav class=\"mat-menu\">\n\t\t\t\t\t\t\t\t" + links + "\n\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</header>\n\n\t\t\t<div style=\"height:51px\"></div>\n\t\t";
    }
});

// # HeaderComponent
//
// Represents the header component. Does not mount.
//
var SidebarComponent = new Combo.Component({
    created: function created() {
        this.update({
            group1: [],
            group2: []
        });
    },
    render: function render() {
        var group1 = this.data.group1.map(function (item) {
            return "\n                <a class=\"mat-menu__link\" href=\"" + item.url + "\">" + item.text + "</a>\n            ";
        }).join("");

        var group2 = this.data.group2.map(function (item) {
            return "\n                <a class=\"mat-menu__link\" href=\"" + item.url + "\">" + item.text + "</a>\n            ";
        }).join("");

        return "\n\t\t\t<aside id=\"drawer\" role=\"navigation\" class=\"mat-drawer mat-drawer--flush\">\n\t\t\t\t<div class=\"mat-card custom-card-sidebar\">\n                    <div class=\"mat-card__head\">\n                        <div class=\"mat-media mat-media--reverse mat-media--center mat-type--heading\">\n                            <div class=\"mat-media__image\">\n                                <a class=\"mat-button\"><i class=\"material-icons\">close</i></a>\n                            </div>\n                            <div class=\"mat-media__body mat-menu__title\">\n                                <div class=\"mat--type-title\">Main Menu</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"mat-card__body mat--divider-top\">\t\n                        <nav class=\"mat-menu mat-menu--block\">\n\t\t\t\t\t        " + group1 + "\n\t\t\t\t        </nav>\n                    </div>\n                    <div class=\"mat-card__body mat--divider-top\">   \n                        <nav class=\"mat-menu mat-menu--block\">\n                            " + group2 + "\n                        </nav>\n                    </div>                    \n                </div>\n\t\t\t</aside>\t\t\t\t\t\n\t\t";
    }
});

// ## LayoutPage
//
// Represents the Layout page. Mounts to #root.
//
var LayoutPage = new Combo.Component({
    render: function render() {
        return "\n           " + HeaderComponent.render() + "                \n           " + SidebarComponent.render() + "\t\t\n           \n           <main role=\"main\" id=\"content\"></main>\n        ";
    }
});

// # Configuration


// **HeaderComponent**
// 
// The configuration for the Header component.
//
HeaderComponent.update({
    title: "Combo",
    links: [{
        text: "V2.0.0",
        url: "https://github.com/combojs/combo-js/blob/master/CHANGELOG.md"
    }, {
        text: "GitHub",
        url: "https://github.com/combojs/combo-js"
    }]
});

// **SidebarComponent**
// 
// The configuration for the Sidebar component.
//
SidebarComponent.update({
    group1: [{
        text: "API",
        url: "https://github.com/combojs/combo-js/blob/master/doc/api/api.md"
    }, {
        text: "Annotated Source",
        url: "https://cdn.rawgit.com/combojs/combo-js/master/doc/docco/combo.full.html"
    }],
    group2: [{
        text: "GitHub",
        url: "https://github.com/combojs/combo-js"
    }, {
        text: "Gitter",
        url: "https://gitter.im/combo-js/"
    }]
});

// **BannerComponent**
// 
// The configuration for the Banner component.
//
BannerComponent.update({
    links: [{
        text: "API",
        url: "https://github.com/combojs/combo-js/blob/master/doc/api/api.md"
    }, {
        text: "Github",
        url: "https://github.com/combojs/combo-js"
    }]
});

// # routes
//
// Defines the routes in the router. LayoutPage must mount first.
//
LayoutPage.mount(document.getElementById("root"));

routie({
    "": function _() {
        $reset("#drawer");
        AboutPage.mount(document.getElementById("content"));
    },
    "/about": function about() {
        $reset("#drawer");
        AboutPage.mount(document.getElementById("content"));
    },
    "/sessions": function sessions() {
        $reset("#drawer");
        SessionsPage.mount(document.getElementById("content"));
    },
    "/downloads": function downloads() {
        $reset("#drawer");
        DownloadsPage.mount(document.getElementById("content"));
    },
    "/gallery": function gallery() {
        $reset("#drawer");
        GalleryPage.mount(document.getElementById("content"));
    },
    "/subscribe": function subscribe() {
        $reset("#drawer");
        SubscribePage.mount(document.getElementById("content"));
    }
});
