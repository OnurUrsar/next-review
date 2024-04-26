import { LayoutProps } from "@/types";

export default function Heading({ children }: LayoutProps) {
  return <h1 className="font-bold pb-3 text-2xl">{children}</h1>;
}
