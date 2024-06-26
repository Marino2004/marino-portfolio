import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
       Bonjour, je suis <HighlightSpan>Marino Miha</HighlightSpan>!
      </p>
      <p>
        Je suis un <HighlightAlt>développeur back-end</HighlightAlt> basé à Antananrivo Madagascar.
      </p>
      <p>
        Je suis passionné par la programmation <br />
        Coder est ma  seconde nature.
      </p>
    </AboutWrapper>
  );
};

export default About;
