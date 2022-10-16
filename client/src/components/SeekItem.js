import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem.js";

const SeekItemContainer = styled(ListItem)``;

const SeekItem = (props) => {
  return <SeekItemContainer {...props}></SeekItemContainer>;
};

export default SeekItem;
