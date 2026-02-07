import { Obra, Exposicao, Publicacao, Premio, Pesquisa, TimelineEvent, DatabaseStats } from '@/types/database';

export const mockObras: Obra[] = [
  {
    id: 'OBR001',
    titulo: 'Noturno em Belém',
    data: '1987',
    local: 'Belém, PA',
    dimensoes: '50x60cm',
    cor: true,
    analogica: true,
    tripe: true,
    acervo: 'Coleção particular',
    imagemUrl: '/placeholder.svg'
  },
  {
    id: 'OBR002',
    titulo: 'Ver-o-Peso ao Amanhecer',
    data: '1992',
    local: 'Belém, PA',
    dimensoes: '80x100cm',
    cor: true,
    analogica: true,
    tripe: true,
    acervo: 'MAM-SP',
    imagemUrl: '/placeholder.svg'
  },
  {
    id: 'OBR003',
    titulo: 'Carimbó',
    data: '1995',
    local: 'Marajó, PA',
    dimensoes: '60x80cm',
    cor: true,
    analogica: true,
    tripe: false,
    imagemUrl: '/placeholder.svg'
  },
  {
    id: 'OBR004',
    titulo: 'Amazônia Iluminada',
    data: '2001',
    local: 'Rio Amazonas, PA',
    dimensoes: '100x150cm',
    cor: true,
    analogica: false,
    tripe: true,
    imagemUrl: '/placeholder.svg'
  },
];

export const mockExposicoes: Exposicao[] = [
  {
    id: 'EXP001',
    titulo: 'Amazônia: A Floresta e o Rio',
    subtitulo: 'Fotografias de Luiz Braga',
    local: 'MASP, São Paulo',
    ano: 2005,
    dataAbertura: '2005-03-15',
    dataEncerramento: '2005-06-30',
  },
  {
    id: 'EXP002',
    titulo: 'No Olho da Rua',
    local: 'Galeria Luisa Strina, São Paulo',
    ano: 2010,
  },
  {
    id: 'EXP003',
    titulo: 'Luzes da Amazônia',
    subtitulo: 'Uma retrospectiva',
    local: 'Pinacoteca do Estado, São Paulo',
    ano: 2018,
    dataAbertura: '2018-09-01',
    dataEncerramento: '2019-01-15',
  },
];

export const mockPublicacoes: Publicacao[] = [
  {
    id: 'PUB001',
    titulo: 'No Olho da Rua',
    local: 'São Paulo',
    editora: 'Cosac Naify',
    ano: 2009,
    numeroPaginas: 192,
    isbn: '978-85-7503-XXX-X',
    idioma: 'Português',
    tipo: 'livro',
  },
  {
    id: 'PUB002',
    titulo: 'Luiz Braga: Fotografias',
    editora: 'Pinacoteca',
    ano: 2018,
    numeroPaginas: 240,
    tipo: 'catalogo',
  },
];

export const mockPremios: Premio[] = [
  {
    id: 'PRM001',
    titulo: 'Prêmio Marc Ferrez de Fotografia',
    ano: 1993,
    local: 'FUNARTE, Rio de Janeiro',
  },
  {
    id: 'PRM002',
    titulo: 'Prêmio APCA de Artes Visuais',
    ano: 2010,
    local: 'São Paulo',
  },
  {
    id: 'PRM003',
    titulo: 'Ordem do Mérito Cultural',
    ano: 2015,
    local: 'Brasília',
  },
];

export const mockPesquisas: Pesquisa[] = [
  {
    id: 'PES001',
    titulo: 'A Luz Amazônica na Obra de Luiz Braga',
    autor: 'Maria Silva Santos',
    tipo: 'doutorado',
    areaEstudos: 'Artes Visuais',
    instituicao: 'USP',
    ano: 2019,
  },
  {
    id: 'PES002',
    titulo: 'Fotografia e Identidade Regional',
    subtitulo: 'Luiz Braga e a construção visual da Amazônia',
    autor: 'João Pedro Almeida',
    tipo: 'mestrado',
    areaEstudos: 'Comunicação',
    instituicao: 'UFPA',
    ano: 2021,
  },
];

export const mockTimeline: TimelineEvent[] = [
  { id: 'TL001', ano: 1946, titulo: 'Nascimento', descricao: 'Luiz Braga nasce em Belém do Pará', tipo: 'biografico' },
  { id: 'TL002', ano: 1970, titulo: 'Início na Fotografia', descricao: 'Começa a fotografar profissionalmente', tipo: 'biografico' },
  { id: 'TL003', ano: 1987, titulo: 'Noturno em Belém', tipo: 'obra', referencia: 'OBR001' },
  { id: 'TL004', ano: 1993, titulo: 'Prêmio Marc Ferrez', tipo: 'premio', referencia: 'PRM001' },
  { id: 'TL005', ano: 2005, titulo: 'Exposição no MASP', tipo: 'exposicao', referencia: 'EXP001' },
  { id: 'TL006', ano: 2009, titulo: 'Publicação: No Olho da Rua', tipo: 'publicacao', referencia: 'PUB001' },
  { id: 'TL007', ano: 2010, titulo: 'Prêmio APCA', tipo: 'premio', referencia: 'PRM002' },
  { id: 'TL008', ano: 2015, titulo: 'Ordem do Mérito Cultural', tipo: 'premio', referencia: 'PRM003' },
  { id: 'TL009', ano: 2018, titulo: 'Retrospectiva na Pinacoteca', tipo: 'exposicao', referencia: 'EXP003' },
];

export const mockStats: DatabaseStats = {
  obras: 247,
  exposicoes: 42,
  publicacoes: 18,
  premios: 12,
  pesquisas: 23,
};
