import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Full stack developer</li>
          <li>Web3 developer</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
