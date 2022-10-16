import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem.js";

const ProductItemContainer = styled(ListItem)``;

const ProductItem = (props) => {
  return <ProductItemContainer {...props}></ProductItemContainer>;
};

export default ProductItem;
