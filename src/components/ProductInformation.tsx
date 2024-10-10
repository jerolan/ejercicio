import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TrashIcon } from "@heroicons/react/24/solid";

export type ProductInformation = {
  name: string;
  price: number;
  weight: number;
  total: number;
};

export function ProductInformation(props: ProductInformation) {
  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <CardTitle className="uppercase font-bold">{props.name}</CardTitle>
        <button className="absolute top-4 right-4">
          <TrashIcon className="w-4" />
        </button>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center space-x-4">
            <Label className="text-gray-700">Precio:</Label>
            <Label className="font-bold">{`$${props.price}`}</Label>
          </li>
          <li className="flex items-center space-x-4">
            <Label className="text-gray-700">Peso:</Label>
            <Label className="font-bold">{props.weight}</Label>
          </li>
          <div className="flex justify-end items-center space-x-4">
            <Label className="text-2xl font-normal">Total:</Label>
            <Label className="text-2xl font-bold">{`$${props.total.toFixed(
              2
            )}`}</Label>
          </div>
        </ul>
      </CardContent>
    </Card>
  );
}
