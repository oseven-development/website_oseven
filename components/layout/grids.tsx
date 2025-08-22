const style = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

export default function SimpleGrid({
  cols,
  children,
}: {
  cols: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}) {
  return (
    <div className={`grid grid-cols-1 ${style[cols]} gap-6`}>{children}</div>
  );
}
