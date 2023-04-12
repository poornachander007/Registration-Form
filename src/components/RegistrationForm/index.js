// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isEmptyFirstNameOnBlur: false,
    isEmptyLastNameOnBlur: false,
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isEmptyFirstNameOnBlur: true})
    } else {
      this.setState({isEmptyFirstNameOnBlur: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({isEmptyLastNameOnBlur: true})
    } else {
      this.setState({isEmptyLastNameOnBlur: false})
    }
  }

  onSubmitForm = event => {
    console.log('--------submit clicked-----------')
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true, firstName: '', lastName: ''})
    } else if (firstName === '' && lastName === '') {
      this.setState({isEmptyFirstNameOnBlur: true, isEmptyLastNameOnBlur: true})
    } else if (firstName === '') {
      this.setState({isEmptyFirstNameOnBlur: true})
    } else if (lastName === '') {
      this.setState({isEmptyLastNameOnBlur: true})
    }
  }

  onClickAnotherButton = () => {
    this.setState({firstName: '', lastName: '', isSubmitted: false})
  }

  renderFirstName = () => {
    const {firstName, isEmptyFirstNameOnBlur} = this.state

    return (
      <>
        <label htmlFor="firstNameInput" className="labels">
          FIRST NAME
        </label>
        <br />
        <input
          id="firstNameInput"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          className="inputs"
          placeholder="First name"
        />
        {isEmptyFirstNameOnBlur && <p className="errorMsg">Required</p>}
      </>
    )
  }

  renderLastName = () => {
    const {lastName, isEmptyLastNameOnBlur} = this.state
    return (
      <>
        <label htmlFor="lastNameInput" className="labels">
          LAST NAME
        </label>
        <br />
        <input
          id="lastNameInput"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          className="inputs"
          placeholder="Last name"
        />
        {isEmptyLastNameOnBlur && <p className="errorMsg">Required</p>}
      </>
    )
  }

  renderSuccessDisplay = () => (
    <div className="successContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="successIconImg"
      />
      <p className="successHeading">Submitted Successfully</p>
      <div className="btn_container">
        <button
          type="button"
          className="anotherButton"
          onClick={this.onClickAnotherButton}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    const {firstName, lastName} = this.state
    console.log(firstName, lastName)
    return (
      <div className="Home_container">
        <h1 className="heading">Registration</h1>
        <form
          className="RegistrationForm_container"
          onSubmit={this.onSubmitForm}
        >
          {!isSubmitted && (
            <>
              <div className="firstName_container">
                {this.renderFirstName()}
              </div>
              <div className="lastName_container">{this.renderLastName()}</div>

              <div className="button_container">
                <button type="submit" className="submitButton">
                  Submit
                </button>
              </div>
            </>
          )}
          {isSubmitted && this.renderSuccessDisplay()}
        </form>
      </div>
    )
  }
}

export default RegistrationForm