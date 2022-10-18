import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (id) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos/"
      )
      .then(async (res) => {
        const concursoId = await res.data.filter((arr) => {
          return arr.loteriaId === Number(id);
        });

        axios
          .get(
            `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${concursoId[0].concursoId}`
          )
          .then((res) => {
            setData(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [id]);

  return [data, isLoading];
};

export default useRequestData;
