import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgb(0, 0, 0);
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 5px;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;
