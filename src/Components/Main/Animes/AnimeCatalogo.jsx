import React from "react";
import "./AnimeCatalogoStyle.scss"

function Animes() {
  return (
    <main>
      <h1>Vai na Flix</h1>

      <section>
        <figure>
            <img src="/src/assets/AnimesCapas/dungeon.jpg" alt="Capa do anime Dungeon ni Deai" />
            <img src="/src/assets/AnimesCapas/jujutsu.jpg" alt="Capa do anime Jujutsu" />
            <img src="/src/assets/AnimesCapas/naruto.jpg" alt="Capa do anime Naruto" />
            <img src="/src/assets/AnimesCapas/blueExorcist.jpg" alt="Capa do Blue Exorcist" />
            <img src="/src/assets/AnimesCapas/bokuNoHero.jpg" alt="Capa do anime Boku no Hero" />
            <img src="/src/assets/AnimesCapas/dororo.jpg" alt="Capa do anime Dororo" />
            <img src="/src/assets/AnimesCapas/frieren.jpg" alt="Capa do anime Frieren" />
            <img src="/src/assets/AnimesCapas/haiTo.jpg" alt="Capa do anime Hai To" />
            <img src="/src/assets/AnimesCapas/noragami.jpg" alt="Capa do anime Noragami" />
        </figure>
      </section>
    </main>
  );
}

export default Animes;
