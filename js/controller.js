App.OPERATORS = {
'+': function(a, b) { return a + b },
'-': function(a, b) { return a - b },
'*': function(a, b) { return a * b },
'/': function(a, b) { return a / b },
'=': function(a, b) { return a },
};

App.CalcController = Ember.Object.create({
  displayValue: '',
  operator: null,
  operand: 0,
  memorizedValue: null,

  clear: function(){
    this.set('displayValue', '');
    this.set('operand', 0);
    this.set('operator', null);
  },
  saveToMemory: function(){
    this.set('memorizedValue', this.get('displayValue'));
  },
  eraseMemory: function(){
    this.set('memorizedValue', null);
  },
  loadMemory: function(){
    var mem = this.get('memorizedValue');
    if ( mem !== null )
      this.set('displayValue', this.get('memorizedValue'));
  },
  changeSign: function(){
    var dV = this.get('displayValue');
    this.set('displayValue', dV*-1);
  },
  addInput: function(val){
    if ( Object.keys(App.OPERATORS).indexOf(val) != -1 ){
      this.setOperator(val);
    } else {
      var dV = this.get('displayValue') + val;
      this.set('displayValue', parseFloat(dV));
    }
  },
  setOperator: function(operator){
    var currOperator = this.get('operator'),
        displayValue = this.get('displayValue'),
        operand = this.get('operand');

    if ( currOperator !== null ) {
      displayValue = App.OPERATORS[currOperator](operand, displayValue);
      this.set('displayValue', displayValue);
    }
    this.set('operand', displayValue);

    if ( operator == '=' ){
      this.set('displayValue', displayValue);
      this.set('operator', null);
    } else {
      this.set('displayValue', '');
      this.set('operator', operator);
    }
  }
});
