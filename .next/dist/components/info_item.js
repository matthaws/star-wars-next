'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/appacademy/Desktop/star-wars-next/components/info_item.js';


var InfoItem = function InfoItem(_ref) {
  var character = _ref.character,
      id = _ref.id,
      selectedId = _ref.selectedId,
      updateId = _ref.updateId;

  var content = void 0;
  if (id === selectedId) {
    content = _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, _react2.default.createElement('p', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, character.name), _react2.default.createElement('p', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, 'Height: ', character.height), _react2.default.createElement('p', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, 'Birth Year: ', character.birth_year));
  } else {
    content = _react2.default.createElement('li', { onClick: updateId(id), __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, character.name);
  }

  return _react2.default.createElement('li', {
    className: 'jsx-1184605096',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, content, _react2.default.createElement(_style2.default, {
    styleId: '1184605096',
    css: 'li.jsx-1184605096{font-size:44px;padding:40px;border-bottom:1px solid yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5mb19pdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHNEIsZUFDRixhQUNrQiwrQkFDakMiLCJmaWxlIjoiY29tcG9uZW50cy9pbmZvX2l0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9zdGFyLXdhcnMtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluZm9JdGVtID0gKHsgY2hhcmFjdGVyLCBpZCwgc2VsZWN0ZWRJZCwgdXBkYXRlSWQgfSkgPT4ge1xuICBsZXQgY29udGVudDtcbiAgaWYgKGlkID09PSBzZWxlY3RlZElkKSB7XG4gICAgY29udGVudCA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPntjaGFyYWN0ZXIubmFtZX08L3A+XG4gICAgICAgIDxwPkhlaWdodDoge2NoYXJhY3Rlci5oZWlnaHR9PC9wPlxuICAgICAgICA8cD5CaXJ0aCBZZWFyOiB7Y2hhcmFjdGVyLmJpcnRoX3llYXJ9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgIDxsaSBvbkNsaWNrPXt1cGRhdGVJZChpZCl9PlxuICAgICAgICAgIHtjaGFyYWN0ZXIubmFtZX1cbiAgICAgICAgPC9saT4pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHllbGxvdztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbGk+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb0l0ZW07XG4iXX0= */\n/*@ sourceURL=components/info_item.js */'
  }));
};

exports.default = InfoItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5mb19pdGVtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW5mb0l0ZW0iLCJjaGFyYWN0ZXIiLCJpZCIsInNlbGVjdGVkSWQiLCJ1cGRhdGVJZCIsImNvbnRlbnQiLCJuYW1lIiwiaGVpZ2h0IiwiYmlydGhfeWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxTQUFYLEFBQVcsZUFBNkM7TUFBMUMsQUFBMEMsaUJBQTFDLEFBQTBDO01BQS9CLEFBQStCLFVBQS9CLEFBQStCO01BQTNCLEFBQTJCLGtCQUEzQixBQUEyQjtNQUFmLEFBQWUsZ0JBQWYsQUFBZSxBQUM1RDs7TUFBSSxlQUFKLEFBQ0E7TUFBSSxPQUFKLEFBQVcsWUFBWSxBQUNyQjs4QkFDRSxjQUFBOztrQkFBQTtvQkFBQSxBQUNFO0FBREY7QUFBQSxLQUFBLGtCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQUk7QUFBSjtBQUFBLGlCQURGLEFBQ0UsQUFBYyxBQUNkLHVCQUFBLGNBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQUFZLHNCQUZkLEFBRUUsQUFBc0IsQUFDdEIseUJBQUEsY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLE9BQWdCLDBCQUpwQixBQUNFLEFBR0UsQUFBMEIsQUFHL0I7QUFSRCxTQVFPLEFBQ0g7OEJBQ0UsY0FBQSxRQUFJLFNBQVMsU0FBYixBQUFhLEFBQVM7a0JBQXRCO29CQUFBLEFBQ0c7QUFESDtLQUFBLFlBREYsQUFDRSxBQUNhLEFBRWhCO0FBRUQ7O3lCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxFQUFBO2FBQUE7U0FERixBQUNFLEFBV0w7QUFYSztBQWxCTixBQStCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmZvX2l0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9zdGFyLXdhcnMtbmV4dCJ9