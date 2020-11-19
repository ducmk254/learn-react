import './App.css';
import Clock from './components/Clock';
import NumberList from './components/NumberList';
import TodoList from './components/TodoList';
import Blog from './components/Blog';
import NameForm from './components/NameForm';

import FancyBorder from './components/FancyBorder';
import Container from './components/Container';

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
      <Container sidebar={<NameForm />} content={<FancyBorder><p>FancyBorder element</p></FancyBorder>}></Container>
    </div>
  );
}

export default App;
