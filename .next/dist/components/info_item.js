'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/appacademy/Desktop/Personal Projects/star-wars-next/components/info_item.js';


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
    content = _react2.default.createElement('div', { onClick: updateId(id), __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement('p', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, character.name));
  }

  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, content);
};

exports.default = InfoItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5mb19pdGVtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW5mb0l0ZW0iLCJjaGFyYWN0ZXIiLCJpZCIsInNlbGVjdGVkSWQiLCJ1cGRhdGVJZCIsImNvbnRlbnQiLCJuYW1lIiwiaGVpZ2h0IiwiYmlydGhfeWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxXQUFXLFNBQVgsQUFBVyxlQUE2QztNQUExQyxBQUEwQyxpQkFBMUMsQUFBMEM7TUFBL0IsQUFBK0IsVUFBL0IsQUFBK0I7TUFBM0IsQUFBMkIsa0JBQTNCLEFBQTJCO01BQWYsQUFBZSxnQkFBZixBQUFlLEFBQzVEOztNQUFJLGVBQUosQUFDQTtNQUFJLE9BQUosQUFBVyxZQUFZLEFBQ3JCOzhCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLEtBQUEsa0JBQ0UsY0FBQTs7a0JBQUE7b0JBQUEsQUFBSTtBQUFKO0FBQUEsaUJBREYsQUFDRSxBQUFjLEFBQ2QsdUJBQUEsY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLE9BQVksc0JBRmQsQUFFRSxBQUFzQixBQUN0Qix5QkFBQSxjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FBZ0IsMEJBSnBCLEFBQ0UsQUFHRSxBQUEwQixBQUcvQjtBQVJELFNBUU8sQUFDSDs4QkFDRSxjQUFBLFNBQUssU0FBUyxTQUFkLEFBQWMsQUFBUztrQkFBdkI7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0UsY0FBQTs7a0JBQUE7b0JBQUEsQUFBSTtBQUFKO0FBQUEsaUJBRkosQUFDRSxBQUNFLEFBQWMsQUFFbkI7QUFFRDs7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxFQURGLEFBQ0UsQUFJTDtBQXRCRCxBQXdCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmZvX2l0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9QZXJzb25hbCBQcm9qZWN0cy9zdGFyLXdhcnMtbmV4dCJ9