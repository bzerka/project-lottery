import React, { useState } from "react";
import megasena1 from "../../assets/images/megasena1.png";
import megasena2 from "../../assets/images/megasena2.png";
import {
  Container,
  LeftSection,
  RightSection,
  ContestTitleContainer,
} from "./styled";
import { Select } from "@chakra-ui/react";
import useRequestData from "../../hooks/useRequestData";
import useGetContestTitleAndBackground from "../../hooks/useGetContestTitle";
import { fixDate } from "../../services/fixDate.ts";
import { Spinner } from "@chakra-ui/react";

function PrimeiraPagina() {
  const [contestId, setcontestId] = useState(0);

  const [contestTitle, backgroundColor] =
    useGetContestTitleAndBackground(contestId);
  const [lotteryResult, isLoading] = useRequestData(contestId);

  return (
    <Container>
      <LeftSection contest={contestTitle}>
        <Select
          placeholder="MEGA-SENA"
          fontWeight="bold"
          size="md"
          fontSize="12px"
          width="160px"
          backgroundColor="white"
          marginTop="35px"
          onChange={(e) => setcontestId(e.target.value)}
        >
          <option value="1">QUINA</option>
          <option value="2">LOTOFÁCIL</option>
          <option value="3">LOTOMANIA</option>
          <option value="4">TIMEMANIA</option>
          <option value="5">DIA DE SORTE</option>
        </Select>
        <ContestTitleContainer>
          <div className="icons-mega-sena">
            <img src={megasena1} alt="mega-sena"></img>
            <img src={megasena2} alt="mega-sena"></img>
          </div>
          <p className="contest-title">{contestTitle}</p>
        </ContestTitleContainer>
        <img
          contest={contestTitle}
          className="background-green"
          src={backgroundColor}
          alt="background"
        ></img>
        <footer className="footer-left">
          <p className="footer-left-text-concurso">CONCURSO</p>
          {isLoading && <Spinner size="xs" />}
          {!isLoading && lotteryResult && (
            <p>
              {lotteryResult.id} - {fixDate(lotteryResult.data.slice(0, 10))}
            </p>
          )}
        </footer>
      </LeftSection>
      <RightSection>
        {lotteryResult ? (
          <section className="results">
            {lotteryResult.numeros?.map((num) => {
              return <div>{num}</div>;
            })}
          </section>
        ) : (
          <Spinner size="xs" />
        )}
        <footer className="footer-right">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </footer>
      </RightSection>
    </Container>
  );
}

export default PrimeiraPagina;
