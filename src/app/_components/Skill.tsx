import {
  faJava,
  faJs,
  faPython,
  faReact,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";


type Props = {};

const Skill = (props: Props) => {
  return (
    <div>
      <Card title="Skill">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faPython} className="h-10" />
            <p>Python</p>
          </div>

          <div className="text-center">
            <FontAwesomeIcon icon={faReact} className="h-10" />
            <p>React</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faJava} className="h-10" />
            <p>Java</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faJs} className="h-10" />
            <p>JS</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faHtml5} className="h-10" />
            <p>HTML5</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Skill;
