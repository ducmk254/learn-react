function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => (
    <li key={index}>{number.toString()}</li>
  ));

  return <ul>{listItems}</ul>;
}

export default NumberList;
