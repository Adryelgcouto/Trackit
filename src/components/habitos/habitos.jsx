import Usuario from "../../assets/bob.jpg";
import Plus from "../../assets/plus.svg";
import { ContentHabitos } from "./habitos.styled";
import { render } from "react-dom";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function Habitos() {
  const value = 60;
  return (
    <ContentHabitos>
      <header>
        <h1>TrackIt</h1>
        <img src={Usuario} alt="" />
      </header>
      <main>
        <div>
          <h2>Meus hábitos</h2>
          <button>
            <img src={Plus} alt="" />
          </button>
        </div>
        <div>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </div>
      </main>
      <footer>
        <div>
          <h3>Hábitos</h3>
          
          <div>
            <CircularProgressbar
              value={value}
              text={`Hoje`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
              })}
            />
           
          </div>
          <h3>Histórico</h3>
        </div>
      </footer>
    </ContentHabitos>
  );
}
