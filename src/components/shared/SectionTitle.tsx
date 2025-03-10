import { Fragment } from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Fragment>
      <h2 className="text-[#1F2937] text-2xl lg:text-3xl font-bold">{title}</h2>
    </Fragment>
  );
}
