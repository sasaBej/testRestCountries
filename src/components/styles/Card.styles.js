import styled from "styled-components";

export const StyledCard = styled.div`
  opacity: 0.8;
  border: 1px solid #c9d1d9;
  margin: 15px 15px;
  border-radius: 5px;
  line-height: 1.5;
  display: flex-start;
  flex-direction: column;
  width: 300px;
  height: 370px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    padding: 0 15px 15px;
  }
  span {
    font-size: 1.1rem;
  }
  img {
    height: 50%;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:hover {
    opacity: 1;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const FlexCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
