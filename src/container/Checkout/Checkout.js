import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import "./Checkout.css";
class Checkout extends Component {
  state = {
    deliveryOptions: {
      economy: {
        price: "$7.00"
      },
      standard: {
        price: "$3.00"
      }
    },
    shippingDetails: {
      shippingName: {
        label: "Full Name",
        elementType: "shippingInput",
        elementConfig: {
          placeholder: "John Turing",
          type: "text"
        },
        value: ""
      },
      street: {
        label: "Street",
        elementType: "shippingInput",
        elementConfig: {
          placeholder: "O st",
          type: "text"
        },
        value: ""
      },
      city: {
        label: "City",
        elementType: "shippingInput",
        elementConfig: {
          placeholder: "Lincoln",
          type: "text"
        },
        value: ""
      },
      state: {
        label: "State",
        elementType: "shippingInput",
        elementConfig: {
          placeholder: "Nebraska",
          type: "text"
        },
        value: ""
      },
      zip: {
        label: "Zip",
        elementType: "shippingInput",
        elementConfig: {
          placeholder: "68503",
          type: "text"
        },
        value: ""
      }
    },
    error: {}
  };
  inputChangedHandler = (event, elementName) => {
    const updatedField = {
      ...this.state.shippingDetails,
      [elementName]: {
        ...this.state.shippingDetails[elementName],
        value: event.target.value
      }
    };
    this.setState({ shippingDetails: updatedField });
  };
  submitHandler = event => {
    event.preventDefault();
  };
  routePaymentPage = () => {
    const path = "/payment";
    this.props.history.push(path);
  };

  shippingInputGenerator = value => {
    return (
      <Input
        elementTypes={this.state.shippingDetails[value].elementType}
        elementConfig={this.state.shippingDetails[value].elementConfig}
        value={this.state.shippingDetails[value].value}
        changed={event => this.inputChangedHandler(event, value)}
      />
    );
  };
  render() {
    return (
      <main className="Checkout pt_4 container-fluid ">
        <div className="row">
          <div className="col-md-12 col-lg-6 shoppingList">
            <ShoppingList />
          </div>
          <div className="col-md-12 col-lg-6 gradient_background checkout_form">
            <div className="ShippingForm ">
              <h5>SHIPPING ADDRESS</h5>
              <label>Full Name</label>
              {this.shippingInputGenerator("shippingName")}
              <label>Street</label>
              {this.shippingInputGenerator("street")}
              <label>City</label>
              {this.shippingInputGenerator("city")}
              <label>State</label>
              {this.shippingInputGenerator("state")}
              <label>Zip</label>
              {this.shippingInputGenerator("zip")}
            </div>
            <button
              className="secondary_button"
              onClick={this.routePaymentPage}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Checkout;
