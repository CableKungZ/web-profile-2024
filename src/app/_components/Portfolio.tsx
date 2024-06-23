import React from "react";
import Card from "./common/Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title="Portfolio">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://daobuddy.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              DaoBuddy - First Product Read/Show data from blockchain.
            </a>
          </li>
          <li>
            <a
              href="https://jassadakornsu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Personal Website
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
