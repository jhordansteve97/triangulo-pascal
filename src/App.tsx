import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "../input";

const pascalPyramid = (n: number): number[][] => {
  const triangle: number[][] = []; //matriz en forma triangular
  for (let i = 0; i < n; i++) {
    const row: number[] = [1]; //inserta el primer 1
    for (let j = 1; j < i; j++) {
      // j empieza con 1 para que salte los primeros 2 columnas
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]); //suma los numero de adentro de la columna anterior
    }
    if (i > 0) row.push(1); // inserta el ultimo 1
    triangle.push(row);
  }
  return triangle; //retornar piramide
};

const App = () => {
  const [num, setNum] = useState(7);
  const triangle = pascalPyramid(num); // piramide
  const colors: string[] = [
    // background de las celdas
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-cyan-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500",
  ];

  const baseCss =
    "w-[50px] h-[50px] m-1.5 flex justify-center items-center text-2xl rounded-xl text-white";

  return (
    <div className="flex justify-center items-center min-h-screen p-8">
      <div>
        <h1 className="text-center text-4xl">Triangulo pascal</h1>
        <div className="flex justify-center items-center mb-4">
          <Input
            value={num}
            add={() => setNum(num + 1)}
            subtract={() => setNum(num - 1)}
            disabledAdd={num > 10}
            disabledSubstract={num < 7}
          />
        </div>
        {triangle.map(
          (
            item,
            index //primer triangulo
          ) => (
            <div key={uuidv4()} className="flex justify-center">
              {item.map((value) => (
                <div className={`${baseCss} ${[colors[index]]}`} key={uuidv4()}>
                  {value}
                </div>
              ))}
            </div>
          )
        )}
        {[...triangle].reverse().map(
          (item, index) =>
            index > 0 && ( //segundo triangulo y validacion para que no repita el primer item
              <div key={uuidv4()} className="flex justify-center">
                {item.map((value) => (
                  <div
                    className={`${baseCss} ${[...colors].reverse()[index]}`}
                    key={uuidv4()}
                  >
                    {value}
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default App;
