import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
       Hey, mon nom est <HighlightSpan>Marino Miha</HighlightSpan>!
      </p>
      <p>
        Je suis un <HighlightAlt>développeur back-end</HighlightAlt> à Antananrivo Madagascar.
      </p>
      <p>
        Je suis passionné par le coding <br />
        le développement d' applications informatique.
      </p>
    </AboutWrapper>
  );
};

export default About;
