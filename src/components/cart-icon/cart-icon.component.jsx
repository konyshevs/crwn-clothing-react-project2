import React from "react";

import "./cart-icon.styles.scss";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingItem } from "../../assets/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingItem className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
