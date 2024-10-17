import { motion } from "framer-motion";
import { useState } from "react";
import "/Users/Patrick/Documents/vnwReact/vaiNaFlix/src/Components/Main/MainStyle.scss"

// Arrays separados para diferentes categorias de séries
const imagens = [
  "/src/assets/SeriesCapas/Breaking_Bad_Temp1.jpg",
  "/src/assets/SeriesCapas/dark.jpg",
  "/src/assets/SeriesCapas/euAPatroaeAsCrianacas.jpg",
  "/src/assets/SeriesCapas/gameOfThrones.jpg",
  "/src/assets/SeriesCapas/peakyBlinders.jpg",
  "/src/assets/SeriesCapas/supernatural.jpg",
  "/src/assets/SeriesCapas/todoMundoOdeiaOCris.jpg",
  "/src/assets/SeriesCapas/vikings.jpg",
  "/src/assets/SeriesCapas/yellowStone.jpeg",
];

// Componente do carrossel reutilizável
function Carrossel({ images }) {
  const [currentImages, setCurrentImages] = useState(images);
  const jumpAmount = 5;

  const handleNext = () => {
    const newImages = [...currentImages];
    const movedImages = newImages.splice(0, jumpAmount);
    setCurrentImages([...newImages, ...movedImages]);
  };

  const handlePrev = () => {
    const newImages = [...currentImages];
    const movedImages = newImages.splice(-jumpAmount);
    setCurrentImages([...movedImages, ...newImages]);
  };

  return (
    <div className="carroselMain">
      <motion.div className="carrosel">
        <motion.div
          className="carroselDentro"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {currentImages.map((imagem, index) => (
            <motion.div className="carroselImagens" key={index}>
              <img src={imagem} alt={`Imagem ${index}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
  
      <div className="carroselControle">
        <button onClick={handlePrev} className="botao">
          {"<"}
        </button>
        <button onClick={handleNext} className="botao">
          {">"}
        </button>
      </div>
    </div>
  );
  
}

export default function Series() {
  return (
    <div className="catalogo">
      <h2>Séries de Ação</h2>
      <Carrossel images={imagens} />

      <h2>Séries de Terror</h2>
      <Carrossel images={imagens} />

      <h2>Séries de Terror</h2>
      <Carrossel images={imagens} />

      <h2>Séries de Aventura</h2>
      <Carrossel images={imagens} />
    </div>
  );
}
