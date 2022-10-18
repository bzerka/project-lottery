import { useEffect, useState } from "react";
import backgroundMegasena from "../assets/images/backgroundMegasena.png";
import backgroundQuina from "../assets/images/backgroundQuina.png";
import backgroundLotofacil from "../assets/images/backgroundLotofacil.png";
import backgroundLotomania from "../assets/images/backgroundLotomania.png";
import backgroundTimemania from "../assets/images/backgroundTimemania.png";
import backgroundDiadesorte from "../assets/images/backgroundDiadesorte.png";

const useGetContestTitleAndBackground = (id) => {
  const [contestTitle, setContestTitle] = useState("MEGA-SENA");
  const [backgroundColor, setBackgroundColor] = useState(backgroundMegasena)

  useEffect(() => {
    const contestTitle = () => {
      switch (id) {
        case "1":
          setContestTitle("QUINA");
          setBackgroundColor(backgroundQuina)
          break;
        case "2":
          setContestTitle("LOTOFÁCIL");
          setBackgroundColor(backgroundLotofacil)
          break;
        case "3":
          setContestTitle("LOTOMANIA");
          setBackgroundColor(backgroundLotomania)
          break;
        case "4":
          setContestTitle("TIMEMANIA");
          setBackgroundColor(backgroundTimemania)
          break;
        case "5":
          setContestTitle("DIA DE SORTE");
          setBackgroundColor(backgroundDiadesorte)
          break;
        default:
          setContestTitle("MEGA-SENA");
          setBackgroundColor(backgroundMegasena)
          break;
      }
    };
    contestTitle()
  }, [id]);

  return [ contestTitle, backgroundColor ];
};

export default useGetContestTitleAndBackground;
