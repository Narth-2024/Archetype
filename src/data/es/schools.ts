export type SchoolDef = {
  id: string;
  name: string;
  description: string;
  examples: string[];
};

export const SCHOOLS: SchoolDef[] = [
  {
    id: "abjuracao",
    name: "Abjuración",
    description:
      "Magias protectoras por naturaleza, aunque algunas tienen usos agresivos: crean barreras mágicas, niegan efectos dañinos, hieren a los intrusos o destierran criaturas a otros planos.",
    examples: ["Escudo", "Disipar magia", "Anular bien y mal", "Muro de fuerza"],
  },
  {
    id: "conjuracao",
    name: "Conjuración",
    description:
      "Implican el transporte de objetos y criaturas de un lugar a otro: invocan criaturas o objetos junto al conjurador, permiten teletransportarse o crean cosas de la nada.",
    examples: ["Mano de mago", "Porta dimensional", "Invocar criaturas", "Crear agua"],
  },
  {
    id: "adivinhacao",
    name: "Adivinación",
    description:
      "Revelan información: secretos olvidados, visiones del futuro, localización de cosas escondidas, la verdad tras las ilusiones o visiones de personas y lugares lejanos.",
    examples: ["Detectar magia", "Adivinar", "Visión verdadera", "Comunión"],
  },
  {
    id: "encantamento",
    name: "Encantamiento",
    description:
      "Afectan las mentes de los demás, influyendo o controlando su comportamiento: hacen que los enemigos vean al conjurador como un amigo, obligan a las criaturas a actuar o las controlan como marionetas.",
    examples: ["Hechizar persona", "Sugestión", "Confusión", "Comando"],
  },
  {
    id: "evocacao",
    name: "Evocación",
    description:
      "Manipulan la energía mágica para producir el efecto deseado: invocan explosiones de fuego o relámpagos y canalizan energía positiva para curar heridas.",
    examples: ["Bola de fuego", "Relámpago", "Palabra de curación", "Onda de trueno"],
  },
  {
    id: "illusao",
    name: "Ilusión",
    description:
      "Engañan a los sentidos o a las mentes: hacen que la gente vea lo que no existe, no vea lo que existe, oiga ruidos fantasma o recuerde cosas que nunca ocurrieron.",
    examples: ["Ilusión menor", "Imagen silenciosa", "Imagen mayor", "Fuego fatuo"],
  },
  {
    id: "necromancia",
    name: "Nigromancia",
    description:
      "Manipulan las energías de la vida y la muerte: conceden una reserva extra de fuerza vital, drenan energía de otra criatura, crean no-muertos o devuelven la vida a los muertos.",
    examples: ["Animar muertos", "Drenar vida", "Hablar con los muertos", "Mano espectral"],
  },
  {
    id: "transmutacao",
    name: "Transmutación",
    description:
      "Alteran las propiedades de una criatura, un objeto o un entorno: transforman a los enemigos en criaturas inofensivas, refuerzan a los aliados, mueven objetos o mejoran la curación.",
    examples: ["Polimorfar", "Velocidad", "Acelerar", "Fortaleza animal"],
  },
];

export function getSchool(id: string | undefined | null): SchoolDef | undefined {
  if (!id) return undefined;
  return SCHOOLS.find((s) => s.id === id);
}
