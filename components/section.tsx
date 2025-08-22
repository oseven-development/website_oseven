import { maxWidthCenter, paddingsGlobal, sectionMargins } from "@/static";

const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section
      id={id}
      className={`w-full ${paddingsGlobal} ${sectionMargins} ${className}`}
    >
      <div className={`${maxWidthCenter}`}>{children}</div>
    </section>
  );
};

export default Section;
