import { Icons } from "@/components/icons";

export const skillIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  // Frontend
  "JavaScript": Icons.javascript,
  "TypeScript": Icons.typescript,
  "React": Icons.react,
  "ReactJS": Icons.react,
  "Tailwind": Icons.tailwindcss,
  "TailwindCSS": Icons.tailwindcss,
  "Next.js": Icons.nextjs,
  "NextJS": Icons.nextjs,

  // Backend
  "NodeJS": Icons.nodejs,
  "Node.js": Icons.nodejs,
  "Python": Icons.python,
  "Express": Icons.express,
  "ExpressJS": Icons.express,
  "NestJS": Icons.nestjs,
  "Nest.js": Icons.nestjs,
  "FastAPI": Icons.fastapi,

  // State Management & API
  "Redux": Icons.redux,
  "GraphQL": Icons.graphql,

  // Databases
  "PostgreSQL": Icons.postgresql,
  "Postgres": Icons.postgresql,
  "MongoDB": Icons.mongodb,
  "Mongo": Icons.mongodb,
  "MySQL": Icons.mysql,
  "Redis": Icons.redis,

  // Message Queues
  "Kafka": Icons.kafka,
  "RabbitMQ": Icons.rabbitmq,

  // Cloud & DevOps
  "AWS": Icons.aws,
  "Azure": Icons.azure,
  "Docker": Icons.docker,
  "Terraform": Icons.terraform,
  "Nginx": Icons.nginx,
  "Git": Icons.git,

  // AI & Machine Learning
  "LangChain": Icons.langchain,
  "OpenAI": Icons.openai,
  "RAG": Icons.rag,

  // Tools
  "Vercel": Icons.vercel,
  "Figma": Icons.figma,
  "Postman": Icons.postman,
  "Bun": Icons.bun,
};

export function getSkillIcon(skill: string): React.FC<React.SVGProps<SVGSVGElement>> | null {
  return skillIconMap[skill] || null;
}
