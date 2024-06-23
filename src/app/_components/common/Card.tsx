import React from "react";

type Props = {
  title: string;
};

const Card = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-blue-100 h-full p-4 px-4 hover:bg-blue-200 ease-in-out duration-300 rainbow-border">
      <h1 className="text-xl font-bold pb-4">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Card;