import './App.css';
import Clock from './components/Clock';
import NumberList from './components/NumberList';
import TodoList from './components/TodoList';
import Blog from './components/Blog';
import NameForm from './components/NameForm';

import FancyBorder from './components/FancyBorder';
import Container from './components/Container';
import FilterableProductTable from './components/FilterableProductTable';


function App() {
  const numbers = ['Khoong', 'Mot', '2', 'Ba', 'Bon', 'Nam', 'Sau'];
  const posts = [
    {
      id: 1,
      title: 'Tieu de so 1',
      content: 'Day la noi dung cua title 1',
    },
    {
      id: 2,
      title: 'Tieu de so 2',
      content: 'Day la noi dung cua title 2',
    },
  ];
  const PRODUCTS = [
    {
      category: 'Sporting Goods',
      price: '$49.99',
      stocked: true,
      name: 'Football',
    },
    {
      category: 'Sporting Goods',
      price: '$9.99',
      stocked: true,
      name: 'Baseball',
    },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball',
    },
    {
      category: 'Electronics',
      price: '$99.99',
      stocked: true,
      name: 'iPod Touch',
    },
    {
      category: 'Electronics',
      price: '$399.99',
      stocked: false,
      name: 'iPhone 5',
    },
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
  ];

  return (
    <div>
      <Clock hihi="Viet nam" />
      <NumberList numbers={numbers} />
      <TodoList todos={numbers} />
      <Blog posts={posts} />
      <NameForm />
      <FancyBorder color="yellow">
        <h1>WelCome</h1>
        <p>Thank you for visiting our spacecraft!</p>
      </FancyBorder>
      <Container
        sidebar={<NameForm />}
        content={
          <FancyBorder>
            <p>FancyBorder element</p>
            <h1 className="Dialog-title">Wellcome</h1>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
          </FancyBorder>
        }
      ></Container>

      <FilterableProductTable products={(PRODUCTS)} />
    </div>
  );
}

export default App;
