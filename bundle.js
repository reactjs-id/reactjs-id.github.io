(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _axios = (typeof window !== "undefined" ? window['axios'] : typeof global !== "undefined" ? global['axios'] : null);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

        _this.state = {
            message: null
        };
        return _this;
    }

    _createClass(Footer, [{
        key: 'onSubmit',
        value: function onSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            var email = this.refs.email.value;
            this.setState({ message: null });
            _axios2.default.post('https://reactjs-id.herokuapp.com/invite', {
                email: email,
                channel: 'react-id',
                coc: 0
            }).then(function (response) {
                _this2.setState({ message: 'Wuut! silakan cek email ' + email + ' :D' });
            }, function (err) {
                _this2.setState({ message: err.data.msg });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var message = this.state.message;

            return _react2.default.createElement(
                'footer',
                { className: 'footer', id: 'join-us' },
                _react2.default.createElement(
                    'div',
                    { className: 'subscription' },
                    _react2.default.createElement('img', { style: { width: '80px', height: '80px', marginBottom: '10px' }, src: 'img/slack.png', alt: '' }),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'React-ID di Slack'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Masukkan email Anda untuk mendapatkan undangan dan berdiskusi di Slack.'
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.onSubmit.bind(this) },
                        _react2.default.createElement(
                            'label',
                            { 'for': 'subscription-email', className: 'label' },
                            'Masukkan email di sini...'
                        ),
                        _react2.default.createElement('input', { ref: 'email', id: 'slack-email', className: 'email', placeholder: 'Enter your email...', required: '' }),
                        _react2.default.createElement(
                            'button',
                            { className: 'submit', type: 'submit' },
                            _react2.default.createElement(
                                'span',
                                { className: 'submit-text' },
                                'Dapatkan Undangan'
                            )
                        )
                    ),
                    message ? _react2.default.createElement(
                        'p',
                        null,
                        message
                    ) : null
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content', style: { paddingTop: 0 } },
                    _react2.default.createElement(
                        'div',
                        { className: '' },
                        _react2.default.createElement(
                            'p',
                            { style: { paddingTop: '20px', textAlign: 'center' } },
                            _react2.default.createElement(
                                'a',
                                { className: 'button', href: 'https://github.com/reactjs-id/reactjs-id.github.io#kontribusi' },
                                '+ Ingin Kontribusi? Tambah Konten?'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'copyright', style: { paddingTop: 0 } },
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                '© 2016'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://www.facebook.com/groups/442974152553174/' },
                                    'Komunitas ReactJS Indonesia'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'Dibangun dengan ',
                                _react2.default.createElement(
                                    'a',
                                    { href: 'http://reactjs.com/', target: '_blank' },
                                    'ReactJS'
                                ),
                                '.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

;

exports.default = Footer;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    select: {
        appearance: 'none',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        width: '100%',
        padding: '0 20px',
        border: 'none',
        color: '#000',
        borderRadius: 0,
        background: '#fff'
    }
};

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'hero-transition-manager' },
                _react2.default.createElement(
                    'section',
                    { className: 'hero add show shown' },
                    _react2.default.createElement(
                        'div',
                        { className: 'entrance-transition title-entrance show' },
                        _react2.default.createElement(
                            'h1',
                            { className: 'title' },
                            '1st react.id Meetup'
                        ),
                        _react2.default.createElement(
                            'h3',
                            null,
                            '20 juni 2015 • D\'labs SMDV Jakarta • 19.00'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'center' },
                            _react2.default.createElement(
                                'a',
                                { href: 'http://meetup.com/react-id', target: '_blank', className: 'btn' },
                                'Daftar Sekarang (Gratis)'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'entrance-transition image-entrance show' },
                        _react2.default.createElement('img', { src: 'img/logo.png', alt: '', className: 'rimage' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'blog-controls show' },
                        _react2.default.createElement(
                            'div',
                            { className: 'blog-filter' },
                            _react2.default.createElement(
                                'div',
                                { className: 'selected', style: { padding: 0 } },
                                _react2.default.createElement(
                                    'select',
                                    { ref: 'category', style: styles.select, onChange: this.props.onChange.bind(this) },
                                    _react2.default.createElement(
                                        'option',
                                        { value: '' },
                                        'Semua Kategori'
                                    ),
                                    this.props.categories.map(function (item, i) {
                                        return _react2.default.createElement(
                                            'option',
                                            { key: i, value: item },
                                            item
                                        );
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

;

exports.default = Header;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_Component) {
    _inherits(Hello, _Component);

    function Hello() {
        _classCallCheck(this, Hello);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Hello).apply(this, arguments));
    }

    _createClass(Hello, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_navbar2.default, null),
                React.createElement(
                    'div',
                    { className: 'page-container app-content' },
                    React.createElement(
                        'div',
                        { className: 'page-loader-container' },
                        React.createElement(
                            'article',
                            { className: 'page-blog add show shown categorised' },
                            React.createElement(_post2.default, null)
                        )
                    ),
                    React.createElement(_footer2.default, null)
                )
            );
        }
    }]);

    return Hello;
}(_react.Component);

(0, _reactDom.render)(React.createElement(Hello, null), document.getElementById('root'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./footer":1,"./navbar":4,"./post":5}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    header: {
        background: 'url(img/logo-transparent.png) no-repeat center center',
        backgroundSize: 'contain',
        height: '80px',
        width: '80px'
    },
    headerParent: {
        width: '180px'
    }
};

var Navbar = function Navbar(props) {
    return _react2.default.createElement(
        'div',
        { className: 'entrance-transition nav-wrapper show' },
        _react2.default.createElement(
            'header',
            { className: 'header blog' },
            _react2.default.createElement(
                'nav',
                { className: 'navigation' },
                _react2.default.createElement(
                    'div',
                    { className: 'logo', style: styles.headerParent },
                    _react2.default.createElement(
                        'a',
                        { href: '/' },
                        _react2.default.createElement('div', { style: styles.header })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'menu' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            { className: 'navigation-link' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Home'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'navigation-link' },
                            _react2.default.createElement(
                                'a',
                                { href: '#join-us' },
                                'Join Us'
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = Navbar;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _axios = (typeof window !== "undefined" ? window['axios'] : typeof global !== "undefined" ? global['axios'] : null);

var _axios2 = _interopRequireDefault(_axios);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _underscore = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post(props) {
        _classCallCheck(this, Post);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Post).call(this, props));

        _this.state = {
            posts: [],
            categories: [],
            currentCategory: null
        };
        return _this;
    }

    _createClass(Post, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _axios2.default.get('posts.json').then(function (response) {
                _this2.setState({
                    posts: response.data,
                    categories: _underscore2.default.uniq(response.data.map(function (item) {
                        return item.category;
                    }))
                });
            });
        }
    }, {
        key: 'onCategoryChange',
        value: function onCategoryChange(e) {
            this.setState({ currentCategory: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state;
            var posts = _state.posts;
            var categories = _state.categories;
            var currentCategory = _state.currentCategory;

            if (currentCategory) {
                posts = posts.filter(function (item) {
                    return item.category === currentCategory;
                });
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { categories: categories, onChange: this.onCategoryChange.bind(this) }),
                _react2.default.createElement(
                    'section',
                    { className: 'blog-post-list' },
                    posts.map(function (item, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: i, className: 'blog-post-list-item blog-label-culture' },
                            _react2.default.createElement(
                                'a',
                                { href: item.demo, className: 'post-image', target: '_blank' },
                                _react2.default.createElement(
                                    'div',
                                    { style: { backgroundImage: 'url(' + item.picture + ')' }, className: 'rimage background-image' },
                                    _react2.default.createElement('img', { src: item.picture, alt: item.title, className: 'img' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'blog-category-tag' },
                                    item.category
                                ),
                                _react2.default.createElement(
                                    'h2',
                                    { className: 'title' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: item.demo, target: '_blank' },
                                        item.title
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'meta' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: item.author && item.author.link, target: '_blank' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Oleh '
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            item.author && item.author.name
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'excerpt' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        item.description
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tail' },
                                    item.code ? _react2.default.createElement(
                                        'a',
                                        { href: item.code, target: '_blank' },
                                        'Code'
                                    ) : null,
                                    item.demo ? _react2.default.createElement(
                                        'a',
                                        { href: item.demo, target: '_blank' },
                                        'Demo'
                                    ) : null
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Post;
}(_react2.default.Component);

exports.default = Post;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./header":2}]},{},[3]);
