import styled from "styled-components";

export const Margin = styled.div(({ H = 0, W = 0 }) => ({
  display: "flex",
  width: W,
  minWidth: W,
  height: H,
  minHeight: H,
}));
