import {
  ProductForm,
  ProductList,
  ProductInformation,
  Summary,
} from "@/components";

function App() {
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto px-6">
      <h1 className="text-2xl font-bold">Cotizador de precios</h1>
      <hr className="h-1 border-top border-gray-200 w-full" />
      <ProductForm />
      <ProductList>
        <ProductInformation
          total={10}
          price={10}
          name="Leche deslactosada"
          weight={20}
        />
      </ProductList>
      <hr className="h-1 border-top border-gray-200 w-full" />
      <Summary totalPrice={100} totalWeight={200} />
    </main>
  );
}

export default App;
