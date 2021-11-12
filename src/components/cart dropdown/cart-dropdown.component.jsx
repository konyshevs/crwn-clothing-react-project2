import React from "react";
import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    {cartItems.length ? (
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECK OUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
