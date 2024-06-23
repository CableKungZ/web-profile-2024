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
  
  const Language = (props: Props) => {
    return (
      <div>
        <Card title="Language">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="text-center">
              <p>Thai - Native</p>
            </div>
            <div className="text-center">
              <p>English - Upper Intermediate</p>
            </div>
          </div>
        </Card>
      </div>
    );
  };
  
  export default Language;
  