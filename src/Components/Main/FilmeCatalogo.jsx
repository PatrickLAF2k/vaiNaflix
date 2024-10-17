import { motion } from "framer-motion";
import { useState } from "react";

// Arrays separados para diferentes categorias de séries
const imagens = [
  "/FilmesCapas/ateUltimoHomen.jpgg",
  "/FilmesCapas/brilhoEternoDeUmaMenteSemLembrancas.jpg",
  "/FilmesCapas/donieDarko.jpg",
  "/FilmesCapas/oPredestinado.jpg",
  "/FilmesCapas/sinais.jpg",
  "/FilmesCapas/sniperAmericano.jpg",
  "/FilmesCapas/Sound_of_freedom.jpg",
  "/FilmesCapas/TheTrumanShow.jpg",
  "/FilmesCapas/univerNoOlhar.jpg",
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
      <h2>Filmes de Ação</h2>
      <Carrossel images={imagens} />

      <h2>Filmes de Terror</h2>
      <Carrossel images={imagens} />

      <h2>Filmes de Terror</h2>
      <Carrossel images={imagens} />

      <h2>Filmes de Aventura</h2>
      <Carrossel images={imagens} />
    </div>
  );
}
