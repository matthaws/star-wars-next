'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _info_item = require('./info_item');

var _info_item2 = _interopRequireDefault(_info_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/appacademy/Desktop/Personal Projects/star-wars-next/components/info_index.js';


var InfoIndex = function (_React$Component) {
  (0, _inherits3.default)(InfoIndex, _React$Component);

  function InfoIndex(props, defaultProps) {
    (0, _classCallCheck3.default)(this, InfoIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InfoIndex.__proto__ || (0, _getPrototypeOf2.default)(InfoIndex)).call(this, props, defaultProps));

    _this.state = { query: '', selectedId: null };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.updateId = _this.updateId.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(InfoIndex, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.setState({ selectedId: null });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ query: e.target.value });
    }
  }, {
    key: 'updateId',
    value: function updateId(id) {
      var _this2 = this;

      return function (e) {
        _this2.setState({ selectedId: id });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var characters = this.props.info.results.map(function (character, idx) {
        return _react2.default.createElement(_info_item2.default, {
          character: character,
          key: idx,
          id: idx,
          selectedId: _this3.state.selectedId,
          updateId: _this3.updateId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        });
      });

      return _react2.default.createElement('div', { className: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'CHOOSE YOUR DESTINY.', _react2.default.createElement('input', {
        type: 'text',
        onChange: this.handleChange,
        value: this.state.query,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement('input', {
        type: 'submit',
        value: 'USE THE FORCE',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement('ul', { id: 'characters', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, characters));
    }
  }]);

  return InfoIndex;
}(_react2.default.Component);

InfoIndex.defaultProps = {
  info: {
    results: []
  }
};

exports.default = InfoIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5mb19pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkluZm9JdGVtIiwiSW5mb0luZGV4IiwicHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2VsZWN0ZWRJZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJ1cGRhdGVJZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJpZCIsImNoYXJhY3RlcnMiLCJpbmZvIiwicmVzdWx0cyIsIm1hcCIsImNoYXJhY3RlciIsImlkeCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBO3FDQU9KOztxQkFBQSxBQUFZLE9BQVosQUFBbUIsY0FBYzt3Q0FBQTs7NElBQUEsQUFDekIsT0FEeUIsQUFDbEIsQUFFYjs7VUFBQSxBQUFLLFFBQVEsRUFBRSxPQUFGLEFBQVMsSUFBSSxZQUExQixBQUFhLEFBQXlCLEFBRXRDOztVQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUF0QyxBQUNBO1VBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7VUFBQSxBQUFLLFdBQVcsTUFBQSxBQUFLLFNBQUwsQUFBYyxLQVBDLEFBTy9CO1dBQ0Q7Ozs7O2lDQUVZLEEsR0FBRyxBQUNkO1FBQUEsQUFBRSxBQUNGO1dBQUEsQUFBSyxTQUFTLEVBQUUsWUFBaEIsQUFBYyxBQUFjLEFBQzdCOzs7O2lDQUVZLEEsR0FBRyxBQUNkO1dBQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxFQUFBLEFBQUUsT0FBekIsQUFBYyxBQUFrQixBQUNqQzs7Ozs2QkFFUSxBLElBQUk7bUJBQ1g7O2FBQU8sVUFBQSxBQUFDLEdBQU0sQUFDWjtlQUFBLEFBQUssU0FBUyxFQUFFLFlBQWhCLEFBQWMsQUFBYyxBQUM3QjtBQUZELEFBR0Q7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sa0JBQWEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixRQUFoQixBQUF3QixJQUFJLFVBQUEsQUFBQyxXQUFELEFBQVksS0FBWjsrQkFDN0MsQUFBQztxQkFBRCxBQUNhLEFBQ1g7ZUFGRixBQUVPLEFBQ0w7Y0FIRixBQUdNLEFBQ0o7c0JBQVksT0FBQSxBQUFLLE1BSm5CLEFBSXlCLEFBQ3ZCO29CQUFVLE9BTFosQUFLaUI7O3NCQUxqQjt3QkFENkMsQUFDN0M7QUFBQTtBQUNFLFNBREY7QUFERixBQUFtQixBQVVuQixPQVZtQjs7NkJBV2pCLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxVQUFNLFVBQVcsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDRTtjQUFBLEFBQ08sQUFDTDtrQkFBVSxLQUZaLEFBRWlCLEFBQ2Y7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQjs7b0JBSHBCO3NCQUZKLEFBQ0UsQUFDRSxBQU1GO0FBTkU7QUFDRTtjQUtKLEFBQ08sQUFDTDtlQUZGLEFBRVE7O29CQUZSO3NCQVRKLEFBQ0UsQUFRRSxBQUtGO0FBTEU7QUFDRSwyQkFJSixjQUFBLFFBQUksSUFBSixBQUFPO29CQUFQO3NCQUFBLEFBQ0s7QUFETDtTQWZKLEFBQ0UsQUFjRSxBQUtMOzs7OztFQS9EcUIsZ0IsQUFBTTs7QUFBeEIsQSxVQUNHLEE7O2FBaUVULEEsQUFqRXdCLEFBQ2QsQUFDSztBQURMLEFBQ0o7QUFGa0IsQUFDcEI7O2tCQWdFSixBQUFlIiwiZmlsZSI6ImluZm9faW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9QZXJzb25hbCBQcm9qZWN0cy9zdGFyLXdhcnMtbmV4dCJ9