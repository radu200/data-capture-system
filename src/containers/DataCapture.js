import React, { Component } from 'react';
import { connect } from 'react-redux';
import CapturePage from '../components/pages/DataCapture';
import './../api/akkroo_api';
import { getAttendeeDetails } from './../redux/attendees/selectors';

class CaptureContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      postcode: '',
      optedin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { attendeeD } = this.props;
    const email = attendeeD.email && attendeeD.email;
    this.setState({ email })

  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, postcode, optedin } = this.state;
    const { attendeeD, history } = this.props;
    const name = attendeeD.name ? attendeeD.name : '';

    if (optedin) {
      const templateVars = {
        name,
      };
      window.AkkrooAPI.sendEmail(email, 'registrationEmail', templateVars);
    }

    history.push('/thanks');

    console.log(email, postcode, optedin);
  }
  render() {
    const { handleChange, handleSubmit } = this;
    const { attendeeD } = this.props
    const { email } = this.state    
    return <CapturePage onChange={handleChange} onSubmit={handleSubmit} attendeeD={attendeeD} emailVal={email || ''} />;
  }
}

const mapState = state => ({
  attendeeD: getAttendeeDetails(state),
});



export default connect(mapState, { getAttendeeDetails })(CaptureContainer);
