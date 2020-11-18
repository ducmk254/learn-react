import React from 'react';
import './Clock.css';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    // this.stick = this.stick.bind(this);
  }
  componentDidMount() {
    this.timeId = setInterval(this.stick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  stick() {
    this.setState({date: new Date()});
  }
  render() {
    return (
      <div className="date-time">
        {this.props.hihi}, It's : {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
