"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _nota = /*#__PURE__*/new WeakMap();
var Aluno = /*#__PURE__*/function () {
  function Aluno(nome, nota) {
    _classCallCheck(this, Aluno);
    _classPrivateFieldInitSpec(this, _nota, void 0);
    this.nome = nome;
    _classPrivateFieldSet(_nota, this, nota);
  }
  return _createClass(Aluno, [{
    key: "getNota",
    value: function getNota() {
      return _classPrivateFieldGet(_nota, this);
    }
  }, {
    key: "aprovado",
    value: function aprovado() {
      return _classPrivateFieldGet(_nota, this) >= 6;
    }
  }, {
    key: "exibirAluno",
    value: function exibirAluno() {
      console.log("Nome: ".concat(this.nome, " | Nota: ").concat(_classPrivateFieldGet(_nota, this), " | Situa\xE7\xE3o: ").concat(this.aprovado() ? 'Aprovado' : 'Reprovado'));
    }
  }]);
}();
var alunos = [new Aluno('Alex', 6.5), new Aluno('Ana', 9.5), new Aluno('Bruno', 1.5), new Aluno('Daniela', 2.5), new Aluno('Eduardo', 7.5), new Aluno('Leoanrdo', 5.5), new Aluno('Lucas', 7.5)];
var exibeAprovados = function exibeAprovados(listaAlunos) {
  listaAlunos.filter(function (aluno) {
    return aluno.aprovado();
  }).forEach(function (aluno) {
    return aluno.exibirAluno();
  });
};
console.log('---Aprovados---');
exibeAprovados(alunos);