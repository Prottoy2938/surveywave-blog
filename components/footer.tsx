import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-2 flex flex-col lg:flex-row items-center justify-center">
          <a href="https://surveywave.xyz">
            {" "}
            <h3 className="text-base lg:text-base hover:underline font-bold tracking-tighter leading-tight text-center lg:text-center mb-10 lg:mb-0 lg:pr-4 text-centers">
              Powered by SurveyWave
            </h3>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
