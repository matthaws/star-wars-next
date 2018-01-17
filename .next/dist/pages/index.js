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

var _styles = require('../styles/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/appacademy/Desktop/Personal Projects/star-wars-next/pages/index.js?entry';


var App = function App(props) {
  return _react2.default.createElement('main', { id: 'content', className: 'jsx-3018207529',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('h1', { id: 'title', className: 'jsx-3018207529',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Star Wars Holocron'), _react2.default.createElement(_info_index2.default, { info: props.info, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_contact2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '3018207529',
    css: '@font-face{font-family:StarWars;src:url(/static/special_font.woff);}body{background-color:black;color:yellow;background-image:url(/static/1.jpg);}#title{grid-column-start:1;grid-column-end:6;text-align:center;padding-left:50px;margin:5px;font-size:40px;font-family:StarWars;}p{font-size:40px;}.search{grid-column-start:1;grid-column-end:6;grid-row-start:3;display:grid;grid-template-columns:1fr 2fr 1fr;}form{text-align:center;padding-top:30px;grid-column-start:2;}label{font-family:StarWars;font-size:20px;}input[type=\'text\']{display:block;margin:10px auto;height:50px;width:400px;font-size:35px;font-family:StarWars;}input[type=\'submit\']{background-color:black;border:1px solid yellow;padding:10px;border-radius:5px;color:yellow;font-size:20px;font-family:StarWars;cursor:pointer;}footer{grid-column-start:2;grid-column-end:5;grid-row-start:2;width:66%;padding:0;margin:0 auto;}#characters{padding:10px;list-style:none;grid-column-start:1;grid-column-end:2;font-family:StarWars;}#characters li{font-size:44px;padding:5px;border-bottom:1px solid yellow;}#content{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-template:rows:1fr 1fr 3fr;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFJLEFBRThCLEFBS0UsQUFNSCxBQVVMLEFBSUssQUFRRixBQU1HLEFBS1AsQUFTUyxBQVdILEFBU1AsQUFVRSxBQU1GLGFBZkcsQUFnQjBCLENBN0N6QixDQXZCbkIsQUE4RGMsR0FsREssRUF0QkMsQUFjQSxBQXVDQSxDQS9EckIsQUFzQ2tCLEVBbENGLEFBZ0RXLElBK0JPLEVBVlgsRUE3QlIsSUFYUSxDQTVCZ0IsQUFrQ3RDLEVBNUJvQixBQWNELEFBdUNBLEtBbkJMLElBUUMsRUFxQkssTUFoRE4sQUFRZCxBQVlpQixBQW1CTCxBQXdCcUIsQ0F6RmpDLEFBWW9CLEVBd0VwQixFQTlCb0IsS0FZUixFQVVXLENBakRhLEVBb0JiLEVBekN2QixFQU9hLENBc0RHLEdBWkQsT0F6Q0UsQ0E0RWpCLEVBWkEsQ0FWQSxFQXBCQSxBQVFpQixTQXpDTSxFQWF2QixJQTZCdUIsZUF6Q3ZCLE1BMENpQixlQUNqQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL1BlcnNvbmFsIFByb2plY3RzL3N0YXItd2Fycy1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEluZm9JbmRleCBmcm9tICcuLi9jb21wb25lbnRzL2luZm9faW5kZXgnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlc1wiO1xuXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBpZD1cImNvbnRlbnRcIj5cbiAgICAgIDxoMSBpZD1cInRpdGxlXCI+U3RhciBXYXJzIEhvbG9jcm9uPC9oMT5cbiAgICAgIDxJbmZvSW5kZXggaW5mbz17cHJvcHMuaW5mb30gLz5cbiAgICAgIDxDb250YWN0IC8+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57XG4gICAgYEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogU3RhcldhcnM7XG4gICAgICAgIHNyYzogdXJsKC9zdGF0aWMvc3BlY2lhbF9mb250LndvZmYpXG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvMS5qcGcpO1xuICAgICAgfVxuXG4gICAgICAjdGl0bGUge1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFN0YXJXYXJzO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoIHtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNjtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgICAgIH1cblxuICAgICAgZm9ybSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTdGFyV2FycztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTdGFyV2FycztcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFN0YXJXYXJzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciB7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICB3aWR0aDogNjYlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgI2NoYXJhY3RlcnMge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuXG4gICAgICAgIGZvbnQtZmFtaWx5OiBTdGFyV2FycztcblxuICAgICAgfVxuXG4gICAgICAjY2hhcmFjdGVycyBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgeWVsbG93O1xuICAgICAgfVxuXG4gICAgICAjY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTpyb3dzOiAxZnIgMWZyIDNmcjtcbiAgICAgIH1cblxuICAgICAgYH1cblxuICAgICAgPC9zdHlsZT5cbiAgICAgPC9tYWluPlxuICApO1xufTtcblxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zd2FwaS5jby9hcGkvcGVvcGxlJyk7XG4gIGNvbnN0IGluZm8gPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIGluZm9cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmV0Y2giLCJJbmZvSW5kZXgiLCJDb250YWN0Iiwic3R5bGVzIiwiQXBwIiwicHJvcHMiLCJpbmZvIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sTUFBTSxTQUFOLEFBQU0sSUFBQSxBQUFDLE9BQVUsQUFDckI7eUJBQ0UsY0FBQSxVQUFNLElBQU4sQUFBUyxzQkFBVDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQSxRQUFJLElBQUosQUFBTyxvQkFBUDs7Z0JBQUE7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSx1Q0FBQSxBQUFDLHNDQUFVLE1BQU0sTUFBakIsQUFBdUI7Z0JBQXZCO2tCQUZGLEFBRUUsQUFDQTtBQURBO3NCQUNBLEFBQUM7O2dCQUFEO2tCQUhGLEFBR0U7QUFBQTtBQUFBO2FBSEY7U0FERixBQUNFLEFBeUdIO0FBekdHO0FBRko7O0FBNkdBLElBQUEsQUFBSSwyRkFBa0IsbUJBQUE7V0FBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0YsaUNBREUsQUFDRixBQUFNOzthQUFsQjtBQURjLHlCQUFBOzBCQUFBO2lCQUVELElBRkMsQUFFRCxBQUFJOzthQUFqQjtBQUZjLDBCQUFBOztrQkFBQSxBQUdiO0FBQUEsQUFDTDs7YUFKa0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXRCLEFBUUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9QZXJzb25hbCBQcm9qZWN0cy9zdGFyLXdhcnMtbmV4dCJ9