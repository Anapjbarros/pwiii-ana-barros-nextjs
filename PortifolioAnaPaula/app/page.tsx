"use client";

import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

const flashcards = [
  {
    title: "Bem-vindo ao meu portfólio",
    text: "Sou Biomédica em transição de carreira para Desenvolvedora. Apaixonada por ciência, tecnologia e por resolver problemas de forma inteligente. Este portfólio reúne meus projetos, minhas habilidades e minha jornada nesse novo universo da programação. Bem-vindo(a) ao meu espaço de evolução e criação..",
  },
  {
    title: "Minha Jornada",
    text: "Comecei minha jornada na tecnologia movida pela curiosidade e vontade de criar soluções reais. Como desenvolvedora iniciante, mergulhei no mundo do código, enfrentando bugs e celebrando cada conquista. Hoje, sigo firme, unindo minha paixão pela Biomedicina com a programação para transformar ideias em impacto verdadeiro.",
  },
  {
    title: "Minha Missão",
    text: "Agora, desenvolvo projetos que unem saúde e software, transformando conhecimento em soluções práticas e impactantes.",
  },
];

const tecnologias = [
  { name: "JavaScript", img: "/js.jpeg" },
  { name: "React Native", img: "/native.jpeg" },
  { name: "Node.js", img: "/node.jpeg" },
  { name: "Expo", img: "/expo.jpeg" },
  { name: "MySQL", img: "/sql.png" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Head>
        <title>Portfólio Ana Paula Barros</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="p-6 bg-gray-900 min-h-screen text-white">
        {/* Flashcard com navegação */}
        <section className="mb-10 w-full max-w-full mx-auto relative">
          <div className="relative w-full h-72 rounded overflow-hidden flex items-center justify-center text-center text-white shadow-lg select-none">
            <img
              src="/bg-saude.jpg"
              alt="Fundo comum do flashcard"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              key="common-bg"
            />
            <div className="relative px-6 max-w-4xl">
              <h2 className="text-3xl font-bold mb-4 drop-shadow-md">
                {flashcards[activeIndex].title}
              </h2>
              <p className="text-lg drop-shadow-md">{flashcards[activeIndex].text}</p>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex justify-center space-x-4 mt-6">
            {flashcards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? "bg-white" : "bg-white/50 hover:bg-white"
                }`}
                aria-label={`Mostrar flashcard ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Tecnologias / Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-center">Minhas Skills</h2>

          {/* Frase logo abaixo do título */}
          <p className="mb-6 text-center text-gray-300 italic">
            Tecnologias e linguagens que estou aprendendo na prática, conforme desenvolvo meus projetos.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {tecnologias.map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-800 rounded-lg p-6 w-44 flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-3">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Meus Projetos</h2>
          <p className="mb-6 text-gray-300 italic">
            Projetos que construí com o objetivo de transformar conhecimento em impacto real.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {/* Projeto 1 */}
            <div className="bg-gray-800 rounded p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded bg-gray-600 mb-4 overflow-hidden">
                <img
                  src="/rede.jpeg"
                  alt="Logo Projeto"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">RedeMãeAutista</h3>
              <p className="mb-4 text-gray-300">
                App desenvolvido para auxiliar mães e responsáveis por crianças autistas, oferecendo organização de dados médicos, escolares e rotinas, promovendo mais autonomia e suporte no dia a dia.
              </p>
              <span className="text-blue-500 underline opacity-50 cursor-not-allowed">
                Ver detalhes
              </span>
            </div>

            {/* Projeto 2 */}
            <div className="bg-gray-800 rounded p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded bg-gray-600 mb-4 overflow-hidden">
                <img
                  src="/guia.jpeg"
                  alt="Logo Projeto"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Guia Gastronômico</h3>
              <p className="mb-4 text-gray-300">
                Descubra os melhores restaurantes, cafeterias e bares da sua cidade. Um guia completo pra quem ama boa comida, experiências únicas e novos sabores.
              </p>
              <span className="text-blue-500 underline opacity-50 cursor-not-allowed">
                Ver detalhes
              </span>
            </div>

            {/* Projeto 3 */}
            <div className="bg-gray-800 rounded p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded bg-gray-600 mb-4 overflow-hidden">
                <img
                  src="/lab.jpeg"
                  alt="Logo Projeto"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">LabStock Pro</h3>
              <p className="mb-4 text-gray-300">
                istema web para controle ágil e eficiente do estoque de laboratórios, garantindo organização e evitando faltas de materiais essenciais.
              </p>
              <span className="text-blue-500 underline opacity-50 cursor-not-allowed">
                Ver detalhes
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
