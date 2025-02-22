"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Função simples de soma
function somar(a, b) {
  return a + b;
}
console.log(somar(10, 20));

// Função simples de soma com arguments
function somar2() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somar2(10, 20, 30, 40));
// Rest - Usado como argumento de função
// Função de soma com rest operator
function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(10, 20, 30, 40, 50));

// Spread - Permite espalhar os itens de um array. Utilizado para concatenações, console.log, preenchimento de objeto...
var numeros = [1, 2, 3, 4];
(_console = console).log.apply(_console, numeros);
var timeFBSP = ['Santos', 'Palmeiras', 'Bragantino', 'Saõ Paulo'];
var timeFBRJ = ['Vasco', 'Flamengo', 'Bota Fogo', 'Fluminense'];

// Com função concat
var timesFB = timeFBSP.concat(timeFBRJ);
console.log(timesFB);

// Com Spread
var timesFB2 = [].concat(timeFBSP, timeFBRJ);
console.log(timesFB2);

// Espalhar Propiedades do Objeto
var carroJulia = {
  modelo: 'Gol',
  marca: 'Volkswagen',
  motor: 1.6,
  titular: 'Júlia'
};
var carroAna = _objectSpread(_objectSpread({}, carroJulia), {}, {
  motor: 1.8,
  titular: 'Ana'
});
var carros = [carroJulia, carroAna];
console.log(carros);

// Desestruturação
var motorCarroAna = carroAna.motor;
var motorCarroJulia = carroJulia.motor;
console.log(motorCarroAna);
console.log(motorCarroJulia);

// Desestruturação de um Array
var _timesFB = _toArray(timesFB),
  item1 = _timesFB[0],
  item2 = _timesFB[1],
  item3 = _timesFB[2],
  outrosTimes = _timesFB.slice(3);
console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);