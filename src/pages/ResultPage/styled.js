import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: #efefef;
  z-index: -1;

  .footer-left {
    width: 50%;
    height: 5%;
    color: white;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding-bottom: 6rem;

    .footer-left-text-concurso {
      font-weight: normal;
      font-size: 12px;
    }
  }

  .footer-right {
    position: absolute;
    bottom: 10%;
    font-size: 12px;
  }

  p {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    .footer-right {
      position: absolute;
      font-weight: bold;
      width: 70%;
      bottom: 8%;
      font-size: 12px;
    }
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  min-width: 360px;
  z-index: 0;
  padding-right: 5rem;
  position: relative;

  .background-green {
    position: absolute;
    width: 100%;
    left: 0%;
    height: 100%;
    z-index: -1;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 48vh;
    padding: 0;
    gap: 40px;
    background-color: ${(props) => {
      switch (props.contest) {
        case "QUINA":
          return "#8666EF";
        case "LOTOFÁCIL":
          return "#DD7AC6";
        case "LOTOMANIA":
          return "#FFAB64";
        case "TIMEMANIA":
          return "#5AAD7D";
        case "DIA DE SORTE":
          return "#BFAF83";
        default:
          return "#6BEFA3";
      }
    }};

    .background-green {
      display: none;
    }
  }
`;

export const ContestTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  .contest-title {
    font-weight: bold;
    font-size: 24px;
    color: white;
  }

  .icons-mega-sena {
    width: 50px;
    height: 50px;
    display: flex;
    position: relative;

    img {
      width: 50px;
      height: 50px;
      position: absolute;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 5px;

    .contest-title {
      font-size: 24px;
    }

    .icons-mega-sena {
      width: 50px;
      height: 50px;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export const RightSection = styled.div`
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  padding-left: 4%;

  .results {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    font-size: 23px;
    font-weight: bold;
    margin-right: 8%;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: white;
      width: 5rem;
      height: 5rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    min-height: 52vh;
    padding: 2.5rem 0 0 0;
    align-items: center;
    justify-content: flex-start;

    .results {
      justify-content: center;
      gap: 10px;
      height: 100%;
      max-height: 33vh;
      margin: 0;
      padding: 0 1rem;
      overflow: scroll;

      div {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;
