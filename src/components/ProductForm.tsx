import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export function ProductForm() {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Agregar producto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="my-2">
            <Label>Nombre</Label>
            <Input type="text" placeholder="Nombre del producto" />
          </div>
          <div className="my-2">
            <Label>Precio</Label>
            <Input type="number" placeholder="$0.0" />
          </div>
          <div className="my-2">
            <Label>Peso</Label>
            <Input type="number" placeholder="0.0" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Guardar</Button>
        </CardFooter>
      </Card>
    </>
  );
}
