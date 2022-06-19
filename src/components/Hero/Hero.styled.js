import styled from "styled-components";

const Container = styled.div`
  margin: 5rem auto;
  padding: 1rem;

  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;

const StyledHero = styled.section`
  display: flex;
  padding: 2rem;

  .item {
  background-color: #0E69D8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  }

  .item div {
    padding: 10px;
    width: auto;
    height: auto;
  }

  @media screen and (min-width: 769px) {
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export default StyledHero;
export { Container };
