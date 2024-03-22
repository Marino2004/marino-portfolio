import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Diplome de Licence",
    desc: "UST-IO Antananrivo | 2021 ~ 2024",
  },
  {
    title: "L3 en cours",
    desc: "CNTEMAD (Informatique) | Depuis 2021",
  },
  {
    title: "DSA",
    desc: "42 Antananarivo | 2021",
  },
  {
    title: "BAC série C",
    desc: "Houssen Mémorial School | 2021",
  },
];

export default Education;
