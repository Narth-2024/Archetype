export type SchoolDef = {
  id: string;
  name: string;
  description: string;
  examples: string[];
};

export const SCHOOLS: SchoolDef[] = [
  {
    id: "abjuracao",
    name: "Abjuração",
    description:
      "Magias protetoras por natureza, embora algumas tenham usos agressivos: criam barreiras mágicas, negam efeitos nocivos, ferem intrusos ou banem criaturas para outros planos.",
    examples: ["Escudo", "Dissipar Magia", "Proteção contra Bem e Mal", "Parede de Força"],
  },
  {
    id: "conjuracao",
    name: "Conjuração",
    description:
      "Envolve o transporte de objetos e criaturas de um lugar para outro: invocam criaturas ou objetos ao lado do conjurador, permitem teleporte ou criam coisas do nada.",
    examples: ["Mão de Mago", "Passo Dimensional", "Invocar Criaturas", "Criar Água"],
  },
  {
    id: "adivinhacao",
    name: "Adivinhação",
    description:
      "Revelam informações: segredos esquecidos, visões do futuro, localização de coisas escondidas, a verdade por trás de ilusões ou visões de pessoas e lugares distantes.",
    examples: ["Detectar Magia", "Adivinhar", "Ver com Afinidade", "Comunhão"],
  },
  {
    id: "encantamento",
    name: "Encantamento",
    description:
      "Afetam as mentes de outros, influenciando ou controlando seu comportamento: fazem inimigos verem o conjurador como amigo, forçam criaturas a agirem ou as controlam como marionetes.",
    examples: ["Enfeitiçar Pessoa", "Sugestão", "Confusão", "Comando"],
  },
  {
    id: "evocacao",
    name: "Evocação",
    description:
      "Manipulam energia mágica para produzir o efeito desejado: invocam explosões de fogo ou relâmpago e canalizam energia positiva para curar feridas.",
    examples: ["Bola de Fogo", "Relâmpago", "Palavra de Cura", "Onda de Trovão"],
  },
  {
    id: "illusao",
    name: "Ilusão",
    description:
      "Enganam os sentidos ou as mentes: fazem pessoas verem o que não existe, não verem o que existe, ouvirem ruídos fantasma ou lembrarem de coisas que nunca aconteceram.",
    examples: ["Ilusão Menor", "Imagem Silenciosa", "Imagem Major", "Fogo-Fátuo"],
  },
  {
    id: "necromancia",
    name: "Necromancia",
    description:
      "Manipulam as energias da vida e da morte: concedem um reserva extra de força vital, drenam energia de outra criatura, criam mortos-vivos ou devolvem os mortos à vida.",
    examples: ["Anima Mortos", "Drenar Vida", "Falar com os Mortos", "Mão Espectral"],
  },
  {
    id: "transmutacao",
    name: "Transmutação",
    description:
      "Alteram as propriedades de uma criatura, objeto ou ambiente: transformam inimigos em criaturas inofensivas, fortalecem aliados, movem objetos ou aprimoram a cura.",
    examples: ["Polimorfo", "Velocidade", "Acelerar", "Fortitude Animal"],
  },
];

export function getSchool(id: string | undefined | null): SchoolDef | undefined {
  if (!id) return undefined;
  return SCHOOLS.find((s) => s.id === id);
}
