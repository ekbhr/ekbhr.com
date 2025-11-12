import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>;
}
