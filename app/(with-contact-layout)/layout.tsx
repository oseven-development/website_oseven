import YourContact from "@/components/content/your-contact";
import Section from "@/components/section";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Section be="light">
        <YourContact />
      </Section>
    </>
  );
}
