"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Abstração, a classe, função construtura no JS
function Pokemon(nome, tipo) {
  this.nome = nome;
  this.tipo = tipo;
}
// Instância de "Pokemon"
var pikachu = new Pokemon("Pikachu", "Elétrico");
console.log('Inicio Pokemon');
console.log(pikachu);
console.log('Fim Pokemon');

//  Introdução das classes com ECMAScript (ao invés das funções)
var Pokemon2 = /*#__PURE__*/_createClass(function Pokemon2() {
  _classCallCheck(this, Pokemon2);
  _defineProperty(this, "nome", '');
  _defineProperty(this, "tipo", '');
});
var pikachu2 = new Pokemon2();
pikachu2.nome = 'Pikachu';
pikachu2.tipo = 'Elétrico';
console.log('Inicio Pokemon 2');
console.log(pikachu2);
console.log('Fim Pokemon 2');

// Conceito de construtor
var Pokemon3 = /*#__PURE__*/_createClass(function Pokemon3(nomePokemon, tipoPokemon) {
  _classCallCheck(this, Pokemon3);
  _defineProperty(this, "nome", '');
  _defineProperty(this, "tipo", '');
  this.nome = nomePokemon;
  this.tipo = tipoPokemon;
});
var pikachu3 = new Pokemon3('Pikachu', 'Elétrico');
var bulba = new Pokemon3('Bulbasauro', 'Grama');
console.log('Inicio Pokemon 3');
console.log(pikachu3);
console.log(bulba);
console.log('Fim Pokemon 3');

// Criar metodos
var Pokemon4 = /*#__PURE__*/function () {
  function Pokemon4(nomePokemon, tipoPokemon) {
    _classCallCheck(this, Pokemon4);
    this.nome = nomePokemon;
    this.tipo = tipoPokemon;
  }
  return _createClass(Pokemon4, [{
    key: "atacar",
    value: function atacar(nomeAtaque) {
      console.log("".concat(this.nome, " atacou com ").concat(nomeAtaque));
    }
  }]);
}();
var pikachu4 = new Pokemon4('Pikachu', 'Elétrico');
console.log('Inicio Pokemon 4');
pikachu4.atacar('Choque do trovão!');
var bulba2 = new Pokemon4('Bulbasauro', 'Grama');
console.log(pikachu4);
console.log(bulba2);
console.log('Fim Pokemon 4');

// Polimorfismo e Herança(As instâncias da classe filha tbm são consideradas intâncias da classe mãe)
var Pokemon5 = /*#__PURE__*/_createClass(function Pokemon5(nomePokemon, tipoPokemon) {
  _classCallCheck(this, Pokemon5);
  this.nome = nomePokemon;
  this.tipo = tipoPokemon;
});
var Pikachu = /*#__PURE__*/function (_Pokemon3) {
  function Pikachu() {
    _classCallCheck(this, Pikachu);
    return _callSuper(this, Pikachu, ['Pikachu', 'Elétrico']);
  }
  _inherits(Pikachu, _Pokemon3);
  return _createClass(Pikachu, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com Coque do trov\xE3o!"));
    }
  }]);
}(Pokemon5);
var pikachuAsh = new Pikachu();
console.log('Inicio Pokemon 5');
console.log(pikachuAsh);
pikachuAsh.atacar();
console.log(pikachuAsh instanceof Pikachu);
console.log(pikachuAsh instanceof Pokemon5);
console.log('Fim Pokemon 5');

// Encapsulamento
var _hp = /*#__PURE__*/new WeakMap();
var Pokemon6 = /*#__PURE__*/function () {
  // A '#' indica o recuso como privado, acessível apenas dentro da classe

  function Pokemon6(nomePokemon, tipoPokemon) {
    _classCallCheck(this, Pokemon6);
    _classPrivateFieldInitSpec(this, _hp, 100);
    this.nome = nomePokemon;
    this.tipo = tipoPokemon;
  }
  return _createClass(Pokemon6, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com Coque do trov\xE3o!"));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      _classPrivateFieldSet(_hp, this, _classPrivateFieldGet(_hp, this) - 10);
      console.log("".concat(this.nome, " recebeu um ataque."));
    }
  }, {
    key: "exibeHp",
    value: function exibeHp() {
      console.log('HP:', _classPrivateFieldGet(_hp, this));
    }
  }]);
}();
var Pikachu2 = /*#__PURE__*/function (_Pokemon5) {
  function Pikachu2() {
    _classCallCheck(this, Pikachu2);
    return _callSuper(this, Pikachu2, ['Pikachu', 'Elétrico']);
  }
  _inherits(Pikachu2, _Pokemon5);
  return _createClass(Pikachu2);
}(Pokemon6);
var pikachuAsh2 = new Pikachu2();
console.log('Inicio Pokemon 6');
pikachuAsh2.hp = 5000; // Tentativa de adicionar HP | É criado um novo e não substitui o HP privado
console.log('HP HACK:', pikachuAsh2.hp);
pikachuAsh2.exibeHp();
pikachuAsh2.recebeuAtaque();
pikachuAsh2.exibeHp();
pikachuAsh2.atacar();
console.log('Fim Pokemon 6');