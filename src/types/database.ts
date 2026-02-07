// Database types for Luiz Braga Archive

export interface Obra {
  id: string;
  titulo: string;
  data?: string;
  local?: string;
  dimensoes?: string;
  coordenadas?: string;
  equipamento?: string;
  cor: boolean;
  analogica: boolean;
  tripe: boolean;
  acervo?: string;
  dataAquisicao?: string;
  exposicoes?: string[];
  cliente?: string;
  publicacoes?: string[];
  imagemUrl?: string;
}

export interface Exposicao {
  id: string;
  titulo: string;
  subtitulo?: string;
  local: string;
  ano: number;
  dataAbertura?: string;
  dataEncerramento?: string;
  obras?: string[];
}

export interface Publicacao {
  id: string;
  titulo: string;
  subtitulo?: string;
  local?: string;
  editora?: string;
  ano: number;
  numeroPaginas?: number;
  isbn?: string;
  idioma?: string;
  autores?: string[];
  organizadores?: string[];
  obras?: string[];
  tipo: 'livro' | 'catalogo' | 'revista' | 'outro';
}

export interface Premio {
  id: string;
  titulo: string;
  ano: number;
  local?: string;
}

export interface Pesquisa {
  id: string;
  titulo: string;
  subtitulo?: string;
  autor: string;
  tipo: 'doutorado' | 'mestrado' | 'tcc' | 'artigo' | 'outro';
  areaEstudos?: string;
  faculdade?: string;
  instituicao?: string;
  contato?: string;
  ano?: number;
}

export interface TimelineEvent {
  id: string;
  ano: number;
  mes?: number;
  dia?: number;
  titulo: string;
  descricao?: string;
  tipo: 'biografico' | 'obra' | 'exposicao' | 'publicacao' | 'premio' | 'pesquisa';
  referencia?: string;
}

export interface DatabaseStats {
  obras: number;
  exposicoes: number;
  publicacoes: number;
  premios: number;
  pesquisas: number;
}
