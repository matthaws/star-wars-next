'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _info_index = require('../components/info_index');

var _info_index2 = _interopRequireDefault(_info_index);

var _contact = require('../components/contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/appacademy/Desktop/star-wars-next/pages/index.js?entry';


var App = function App(props) {
  return _react2.default.createElement('main', {
    className: 'jsx-972578592',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-972578592',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Star Wars'), _react2.default.createElement(_info_index2.default, { info: props.info, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_contact2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '972578592',
    css: '@font-face{font-family:StarWars;src:url(\'static/special_font.woff\');}body{background-color:black;margin:0;height:100%;color:yellow;background-image:url(\'static/1.jpg\');}h1{text-align:center;font-size:60px;font-family:StarWars;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl5QixBQUdnQyxBQUtFLEFBUUwsa0JBQ0gsR0FabEIsRUFJWSxTQUNHLENBUVMsV0FQUixVQVFmLEdBZEEsQUFPdUMscUNBQ3ZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3Avc3Rhci13YXJzLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSW5mb0luZGV4IGZyb20gJy4uL2NvbXBvbmVudHMvaW5mb19pbmRleCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0XCI7XG5cblxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8aDE+U3RhciBXYXJzPC9oMT5cbiAgICAgIDxJbmZvSW5kZXggaW5mbz17cHJvcHMuaW5mb30gLz5cbiAgICAgIDxDb250YWN0IC8+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogU3RhcldhcnM7XG4gICAgICAgICAgc3JjOiB1cmwoJ3N0YXRpYy9zcGVjaWFsX2ZvbnQud29mZicpXG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzdGF0aWMvMS5qcGcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTdGFyV2FycztcbiAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3N3YXBpLmNvL2FwaS9wZW9wbGUnKTtcbiAgY29uc3QgaW5mbyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgaW5mb1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

App.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, info;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('https://swapi.co/api/people');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          info = _context.sent;
          return _context.abrupt('return', {
            info: info
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmV0Y2giLCJJbmZvSW5kZXgiLCJDb250YWN0IiwiQXBwIiwicHJvcHMiLCJpbmZvIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFHcEIsSUFBTSxNQUFNLFNBQU4sQUFBTSxJQUFBLEFBQUMsT0FBVSxBQUNyQjt5QkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsOEJBQUEsQUFBQyxzQ0FBVSxNQUFNLE1BQWpCLEFBQXVCO2dCQUF2QjtrQkFGRixBQUVFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDOztnQkFBRDtrQkFIRixBQUdFO0FBQUE7QUFBQTthQUhGO1NBREYsQUFDRSxBQTBCSDtBQTFCRztBQUZKOztBQThCQSxJQUFBLEFBQUksMkZBQWtCLG1CQUFBO1dBQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBO2lCQUNGLGlDQURFLEFBQ0YsQUFBTTs7YUFBbEI7QUFEYyx5QkFBQTswQkFBQTtpQkFFRCxJQUZDLEFBRUQsQUFBSTs7YUFBakI7QUFGYywwQkFBQTs7a0JBQUEsQUFHYjtBQUFBLEFBQ0w7O2FBSmtCO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUF0QixBQVFBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3Avc3Rhci13YXJzLW5leHQifQ==