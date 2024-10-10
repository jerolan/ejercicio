import { Label } from "@/components/ui/label";

export type SummaryType = {
  totalPrice: number;
  totalWeight: number;
};

export function Summary(props: SummaryType) {
  return (
    <>
      <div className="w-full">
        <Label className="text-2xl font-semibold text-gray-800">
          Total Peso:{" "}
        </Label>
        <Label className="text-2xl font-bold">{props.totalWeight}</Label>
      </div>
      <div className="w-full">
        <Label className="text-2xl font-semibold text-gray-800">
          Total Precio:{" "}
        </Label>
        <Label className="text-2xl font-bold">{`$${props.totalPrice.toFixed(
          2
        )}`}</Label>
      </div>
    </>
  );
}
