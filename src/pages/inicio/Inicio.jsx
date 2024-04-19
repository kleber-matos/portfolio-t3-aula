/** @format */

import Header from "../../components/header/Header";
import * as S from "./styled";

export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <div>
          <h2>Bem vindo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            tempora eaque quo, nostrum veritatis nemo ab, omnis tempore
            laudantium voluptatem hic fuga labore aliquam incidunt, voluptatum
            magnam at voluptas reprehenderit?
          </p>
        </div>
      </S.Container>
    </S.Main>
  );
}
