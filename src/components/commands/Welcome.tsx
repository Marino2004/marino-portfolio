import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
         /|/| '/ _  /|/| _ _ '    
        /   |//)(/ /   |(// //)() 
                         
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
                            
     /|/| '/ _  /|/| _ _ '    
    /   |//)(/ /   |(// //)() 
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Bienvenue dans mon terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          Ce projet est open source{" "}
          <Link href="https://github.com/Marino2004">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          Pour lister les commandes disponibles, tapez `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                 /
            ____/__
         ___|    |___
         |___________|
           | |   | |
          ||   |   ||
           | |___| |
           |__   __|
            __| |__
         //|       |\\
        // |       | \\
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
