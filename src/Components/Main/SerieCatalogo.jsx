import { motion } from "framer-motion";
import { useState } from "react";
import "../Main/MainStyle.scss"

// Arrays separados para diferentes categorias de séries
const imagens = [
  "/SeriesCapas/Breaking_Bad_Temp1.jpg",
  "/SeriesCapas/dark.jpg",
  "/SeriesCapas/euAPatroaeAsCrianacas.jpg",
  "/SeriesCapas/gameOfThrones.jpg",
  "/SeriesCapas/peakyBlinders.jpg",
  "/SeriesCapas/supernatural.jpg",
  "/SeriesCapas/todoMundoOdeiaOCris.jpg",
  "/SeriesCapas/vikings.jpg",
  "/SeriesCapas/yellowStone.jpeg",
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
