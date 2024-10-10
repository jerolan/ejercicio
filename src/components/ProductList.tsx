import { PropsWithChildren } from "react";

export function ProductList(props: PropsWithChildren) {
  return (
    <div className="mt-12 w-full">
      <h2 className="text-2xl font-bold">Productos:</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">{props.children}</div>
    </div>
  );
}
