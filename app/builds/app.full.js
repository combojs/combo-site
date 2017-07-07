"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ## BannerPartial
//
// Contains the markup for the Home page banner.
//
var BannerPartial = new (function (_Combo$Component) {
	_inherits(_class, _Combo$Component);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: "render",
		value: function render() {
			return "\n\t\t\t<section class=\"bloom-section custom-section-banner\">\n\t\t\t\t<div class=\"bloom-section__body\">\n\t\t\t\t\t<img alt=\"Logo\" src=\"images/logo.png\" alt=\"logo\">\n\t\t\t\t\t<h1 class=\"custom-hero\">Combo.js</h1>\n\t\t\t\t\t<p class=\"custom-lead\">A lightweight library for creating user interfaces.</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href=\"https://github.com/combojs/combo-js/blob/master/doc/learn.md\" class=\"bloom-button custom-button-ghost\">Learn</a>\n\t\t\t\t\t\t<a href=\"https://github.com/combojs/combo-js/blob/master/doc/api/api.md\" class=\"bloom-button custom-button-ghost\">API</a>\n\t\t\t\t\t\t<a href=\"https://github.com/combojs/combo-js\" class=\"bloom-button custom-button-ghost\">GitHub</a>\t\t\t\t\t\t\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t";
		}
	}]);

	return _class;
}(Combo.Component))();

// ## BannerPartial
//
// Contains the markup for the Home page example section.
//
var ExamplePartial = new (function (_Combo$Component2) {
	_inherits(_class2, _Combo$Component2);

	function _class2() {
		_classCallCheck(this, _class2);

		return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
	}

	_createClass(_class2, [{
		key: "render",
		value: function render(url) {
			return "\n\t\t\t<section class=\"bloom-section custom-section-example\">\n\t\t\t\t<div class=\"bloom-section__body\">\n\t\t\t\t\t<h2>A Quick Example</h2>\n\t\t\t\t\t<img src=\"images/example.png\" alt=\"example\" class=\"bloom-image ( -fluid )\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a class=\"bloom-button\" href=\"https://codepen.io/combojs/pen/gRjJPN\">\n\t\t\t\t\t\t\tRun on CodePen\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t";
		}
	}]);

	return _class2;
}(Combo.Component))();

// ## FeaturePartial
//
// Contains the markup for the Home page's feature section.
//
var FeaturePartial = new (function (_Combo$Component3) {
	_inherits(_class3, _Combo$Component3);

	function _class3() {
		_classCallCheck(this, _class3);

		return _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));
	}

	_createClass(_class3, [{
		key: "render",
		value: function render() {
			return "\n\t\t\t<section class=\"bloom-section custom-section-feature\">\n\t\t\t\t<div class=\"bloom-section__body\">\n\t\t\t\t\t<div class=\"bloom-grid\">\n\t\t\t\t\t\t<div class=\"bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1\">\n\t\t\t\t\t\t<img src=\"images/cog.png\">\n\t\t\t\t\t\t\t<h2>Component-based</h2>\n\t\t\t\t\t\t\t<p style=\"text-align:left\">Design interactive user interfaces from small components that encapsulate the template and logic.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1\">\n\t\t\t\t\t\t\t<img src=\"images/balance.png\">\n\t\t\t\t\t\t\t<h2>Lightweight</h2>\n\t\t\t\t\t\t\t<p style=\"text-align:left\">Combo is approximately 1KB when minified and gzipped. This means the framework will load chop-chop.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bloom-grid__item bloom-width-1-3 bloom-medium-width-1-1\">\n\t\t\t\t\t\t\t<img src=\"images/poo.png\">\n\t\t\t\t\t\t\t<h2>No Bullshit</h2>\n\t\t\t\t\t\t\t<p style=\"text-align:left\">No need to learn JSX or TypeScript. Combo uses ES2015 template literals render your user interfaces.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t";
		}
	}]);

	return _class3;
}(Combo.Component))();

// ## FooterPartial
//
// Contains the markup for the Home page footer.
//
var FooterPartial = new (function (_Combo$Component4) {
	_inherits(_class4, _Combo$Component4);

	function _class4() {
		_classCallCheck(this, _class4);

		return _possibleConstructorReturn(this, (_class4.__proto__ || Object.getPrototypeOf(_class4)).apply(this, arguments));
	}

	_createClass(_class4, [{
		key: "render",
		value: function render() {
			return "\n\t\t\t<footer class=\"bloom-section custom-section-footer\">\n\t\t\t\t<div class=\"bloom-section__body\">\n\t\t\t\t\t<p>Released under the <a class=\"custom-plain-link\" href=\"https://opensource.org/licenses/MIT\">MIT License</a></p>\n\t\t\t\t\t<p>Copyright &copy 2016-2017; Eric Harms</p>\n\t\t\t\t</div>\n\t\t\t</footer>\n\t\t";
		}
	}]);

	return _class4;
}(Combo.Component))();

// ## app
//
// Define application-level variables and methods below.
//

// Render the HomeScene. 
//
Combo.render(document.getElementById("root"), "\n\t" + BannerPartial.render() + "\n\t" + FeaturePartial.render() + "\n\t" + ExamplePartial.render() + "\n\t" + FooterPartial.render() + "\n");
