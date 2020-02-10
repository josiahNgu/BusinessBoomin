import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import "./Payment.css";
// import CartSummary from "../../components/CartSummary/CartSummary";
import Input from "../../components/UI/Input/Input";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
class Payment extends React.Component {
  state = {
    cardElements: {
      cardNumber: {
        label: "Credit Card No.",
        elementType: "cardInput",
        elementConfig: {
          placeholder: "0000 - 0000 - 0000 - 0000",
          type: "number"
        },
        value: ""
      },
      nameOnCard: {
        label: "Full Name",
        elementType: "cardInput",
        elementConfig: {
          placeholder: "Turing Lee",
          type: "text"
        },
        value: ""
      },
      expDate: {
        label: "Good Thru",
        elementType: "cardInputDate",
        elementConfig: {
          placeholder: "01/2022",
          type: "month"
        },
        value: ""
      },
      cvc: {
        label: "CVC",
        elementType: "cardInputRow",
        elementConfig: {
          placeholder: "XXX",
          type: "password"
        },
        value: ""
      }
    }
  };
  inputChangedHandler = (event, elementName) => {
    const updatedField = {
      ...this.state.cardElements,
      [elementName]: {
        ...this.state.cardElements[elementName],
        value: event.target.value
      }
    };
    this.setState({ cardElements: updatedField });
  };
  cardInputGenerator = value => {
    return (
      <Input
        elementTypes={this.state.cardElements[value].elementType}
        elementConfig={this.state.cardElements[value].elementConfig}
        value={this.state.cardElements[value].value}
        changed={event => this.inputChangedHandler(event, value)}
      />
    );
  };
  render() {
    return (
      <div className="Payment pt_4 row">
        <div className="col-md-6 shoppingList">
          <ShoppingList />
        </div>
        <div className="CardSection  col-md-6">
          <h5>CREDIT/DEBIT CARD PAYMENT</h5>
          <div className="Card">
            <FontAwesomeIcon icon={faCreditCard} />
            <div className="row">
              <div className="col-sm-12">
                <label>Card Number</label>
                {this.cardInputGenerator("cardNumber")}
              </div>
              <div className="col-sm-12">
                <label>Full Name</label>
                {this.cardInputGenerator("nameOnCard")}
              </div>
              <div className="col-sm-6">
                <label>Good Thru</label>
                {this.cardInputGenerator("expDate")}
              </div>
              <div className="col-sm-6">
                <label>CVC</label>
                {this.cardInputGenerator("cvc")}
              </div>
            </div>
          </div>
          <button>Place Order</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    initPaypal: () => dispatch(actions.initPaypal())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Payment);