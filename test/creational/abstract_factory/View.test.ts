import DarkWidgetFactory from '../../../src/creational/abstract_factory/DarkWidgetFactory';
import LightWidgetFactory from '../../../src/creational/abstract_factory/LightWidgetFactory';
import View from '../../../src/creational/abstract_factory/View';

// Fornecer uma interface para a criação de famílias de objetos relacionados sem especificar as suas classes concretas
test('Deve criar uma interface gráfica com tema claro', () => {
  const view = new View(new LightWidgetFactory());
  expect(view.label.color).toBe('black');
  expect(view.button.color).toBe('white');
  expect(view.button.backgroundColor).toBe('blue');
});

test('Deve criar uma interface gráfica com tema escuro', () => {
  const view = new View(new DarkWidgetFactory());
  expect(view.label.color).toBe('white');
  expect(view.button.color).toBe('white');
  expect(view.button.backgroundColor).toBe('black');
});
