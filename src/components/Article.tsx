import * as React from "react";

type ArticleProps = {
  rowStart1: string;
  rowStart2: string;
  text1: string;
  text2: string;
};
export default function Article({
  rowStart1,
  rowStart2,
  text1,
  text2,
}: ArticleProps) {
  return (
    <>
      <h2 className={`link link-big row-start-${rowStart1} capitalize`}>
        {text1}
      </h2>
      <p className={`row-start-${rowStart2}`}>{text2}</p>
    </>
  );
}
