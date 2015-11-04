App.POSITIONS = {
  right: { width: 50 },
  right_center: { left: 50, width: 50 },
  left_center: { left: 100, width: 50 },
  left: { left: 150, width: 50 }
};

App.RootView = Flame.View.extend({
  controller: App.CalcController,
  layout: { width: 200, height: 200, centerX: 0, centerY: 0 },
  layoutManager: Flame.VerticalStackLayoutManager.create({ spacing: 30 }),
  childViews: ['display', 'first_line', 'second_line', 'third_line', 'fourth_line', 'fifth_line'],

  display: Flame.TextFieldView.extend({
    layout: { width: '100%' },
    isDisabled: true,
    valueBinding: '^controller.displayValue',
  }),

  first_line: Flame.View.extend({
    childViews: ['ce', 'mplus', 'mminus', 'm'],

    ce: Flame.ButtonView.extend({
      layout: App.POSITIONS.right,
      title: 'CE',
      targetBinding: '^controller',
      action: 'clear'
    }),
      mplus: Flame.ButtonView.extend({
        layout: App.POSITIONS.right_center,
        title: 'M+',
        targetBinding: '^controller',
        action: 'saveToMemory'
      }),
      mminus: Flame.ButtonView.extend({
        layout: App.POSITIONS.left_center,
        title: 'M-',
        targetBinding: '^controller',
        action: 'eraseMemory'
      }),
      m: Flame.ButtonView.extend({
        layout: App.POSITIONS.left,
        title: 'M',
        targetBinding: '^controller',
        action: 'loadMemory'
      }),
    }),
    second_line: Flame.View.extend({
      childViews: ['seven', 'eight', 'nine', 'multiply'],

      seven: Flame.ButtonView.extend({
        layout: App.POSITIONS.right,
        title: '7',
        targetBinding: '^controller',
        action: 'addInput',
        payload: '7'
      }).observes('title'),
      eight: Flame.ButtonView.extend({
        layout: App.POSITIONS.right_center,
        title: '8',
        targetBinding: '^controller',
        action: 'addInput',
        payload: '8'
      }),
      nine: Flame.ButtonView.extend({
        layout: App.POSITIONS.left_center,
        title: '9',
        targetBinding: '^controller',
        action: 'addInput',
        payload: '9'
      }),
      multiply: Flame.ButtonView.extend({
        layout: App.POSITIONS.left,
        title: '*',
        targetBinding: '^controller',
        action: 'addInput',
        payload: '*'
      }),
    }),
    third_line: Flame.View.extend({
      childViews: ['four', 'five', 'six', 'minus'],

      four: Flame.ButtonView.extend({
        layout: App.POSITIONS.right,
        title: '4',
        targetBinding: '^controller',
        action: 'addInput',
        payload: '4'
    }),
    five: Flame.ButtonView.extend({
      layout: App.POSITIONS.right_center,
      title: '5',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '5'
    }),
    six: Flame.ButtonView.extend({
      layout: App.POSITIONS.left_center,
      title: '6',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '6'
    }),
    minus: Flame.ButtonView.extend({
      layout: App.POSITIONS.left,
      title: '-',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '-'
    }),
  }),
  fourth_line: Flame.View.extend({
    childViews: ['one', 'two', 'three', 'plus'],

    one: Flame.ButtonView.extend({
      layout: App.POSITIONS.right,
      title: '1',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '1'
    }),
    two: Flame.ButtonView.extend({
      layout: App.POSITIONS.right_center,
      title: '2',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '2'
    }),
    three: Flame.ButtonView.extend({
      layout: App.POSITIONS.left_center,
      title: '3',
      targetBinding: '^controller',
      selectionBinding: '^controller.selected_num',
      action: 'addInput',
      payload: '3'
    }),
    plus: Flame.ButtonView.extend({
      layout: App.POSITIONS.left,
      title: '+',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '+'
    }),
  }),
  fifth_line: Flame.View.extend({
    childViews: ['zero', 'equal', 'sign', 'divide'],

    zero: Flame.ButtonView.extend({
      layout: App.POSITIONS.right,
      title: '0',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '0'
    }),
    equal: Flame.ButtonView.extend({
      layout: App.POSITIONS.right_center,
      title: '=',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '='
    }),
    sign: Flame.ButtonView.extend({
      layout: App.POSITIONS.left_center,
      title: '+/-',
      targetBinding: '^controller',
      action: 'changeSign',
    }),
    divide: Flame.ButtonView.extend({
      layout: App.POSITIONS.left,
      title: '/',
      targetBinding: '^controller',
      action: 'addInput',
      payload: '/'
    }),
  }),
});
