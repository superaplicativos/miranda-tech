// src/data/seo-data.ts

export interface City {
  name: string;
  slug: string;
  region: string;
  phrase: string;
  populationBracket: 'large' | 'medium' | 'small';
  nearby: string[];
}

export interface Service {
  key: string;
  name: string;
  icon: string;
  description: string;
}

export interface Niche {
  key: string;
  name: string;
  article: string; // "para" | "de"
  singularName: string;
}

export interface SEOPageData {
  slug: string;
  serviceKey: string;
  nicheKey?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  mainContent: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
}

// 60 Cidades do Interior e Estado de São Paulo
export const CITIES: City[] = [
  { name: 'Ribeirão Preto', slug: 'ribeirao-preto', region: 'Região de Ribeirão', phrase: 'a maior cidade e polo de negócios da nossa região', populationBracket: 'large', nearby: ['Cravinhos', 'Jardinópolis', 'Sertãozinho', 'Brodowski', 'Batatais'] },
  { name: 'Franca', slug: 'franca', region: 'Região de Franca', phrase: 'grande centro de comércio e importante polo da nossa região', populationBracket: 'large', nearby: ['Batatais', 'Patrocínio Paulista', 'Claraval', 'Restinga', 'Orlândia'] },
  { name: 'Mococa', slug: 'mococa', region: 'Leste Paulista', phrase: 'cidade de forte comércio local e agronegócio ativo', populationBracket: 'medium', nearby: ['Tambaú', 'Casa Branca', 'Cajuru', 'Arceburgo', 'Tapiratiba'] },
  { name: 'Sertãozinho', slug: 'sertaozinho', region: 'Região de Ribeirão Preto', phrase: 'um dos maiores polos de indústria e prestação de serviços', populationBracket: 'large', nearby: ['Ribeirão Preto', 'Pontal', 'Dumont', 'Barrinha', 'Jardinópolis'] },
  { name: 'Batatais', slug: 'batatais', region: 'Alta Mogiana', phrase: 'cidade com forte comércio e prestadores de serviços de destaque', populationBracket: 'medium', nearby: ['Brodowski', 'Franca', 'Altinópolis', 'Ribeirão Preto', 'Cravinhos'] },
  { name: 'Jaboticabal', slug: 'jaboticabal', region: 'Região de Ribeirão Preto', phrase: 'polo de comércio forte e ótimas empresas prestadoras de serviço', populationBracket: 'medium', nearby: ['Bebedouro', 'Monte Alto', 'Taquaritinga', 'Matão', 'Sertãozinho'] },
  { name: 'Bebedouro', slug: 'bebedouro', region: 'Região de Barretos', phrase: 'cidade com grande circulação de negócios e forte setor comercial', populationBracket: 'medium', nearby: ['Jaboticabal', 'Barretos', 'Monte Azul Paulista', 'Colina', 'Viradouro'] },
  { name: 'São Carlos', slug: 'sao-carlos', region: 'Central Paulista', phrase: 'cidade moderna com forte comércio e destaque empresarial', populationBracket: 'large', nearby: ['Araraquara', 'Ibaté', 'Descalvado', 'Porto Ferreira'] },
  { name: 'Araraquara', slug: 'araraquara', region: 'Central Paulista', phrase: 'referência em comércio ativo e prestadores de serviços qualificados', populationBracket: 'large', nearby: ['São Carlos', 'Matão', 'Américo Brasiliense', 'Ibitinga'] },
  { name: 'Barretos', slug: 'barretos', region: 'Região de Barretos', phrase: 'polo comercial de grande destaque no interior', populationBracket: 'large', nearby: ['Bebedouro', 'Colina', 'Guaíra', 'Olímpia', 'Franca'] },
  { name: 'Cravinhos', slug: 'cravinhos', region: 'Região de Ribeirão', phrase: 'cidade em pleno crescimento de novos negócios e comércio', populationBracket: 'medium', nearby: ['Ribeirão Preto', 'Serrana', 'São Simão', 'Brodowski'] },
  { name: 'Jardinópolis', slug: 'jardinopolis', region: 'Região de Ribeirão Preto', phrase: 'cidade ativa e próxima de grandes mercados consumidores', populationBracket: 'medium', nearby: ['Ribeirão Preto', 'Brodowski', 'Sertãozinho', 'Pontal'] },
  { name: 'Cajuru', slug: 'cajuru', region: 'Leste Paulista', phrase: 'cidade de forte potencial comercial e agropecuário', populationBracket: 'medium', nearby: ['Mococa', 'Altinópolis', 'Santa Rosa de Viterbo', 'Tambaú'] },
  { name: 'Brodowski', slug: 'brodowski', region: 'Região de Ribeirão Preto', phrase: 'cidade com comércio vibrante e em constante expansão', populationBracket: 'medium', nearby: ['Batatais', 'Ribeirão Preto', 'Jardinópolis', 'Cravinhos'] },
  { name: 'Orlândia', slug: 'orlandia', region: 'Região de Franca', phrase: 'polo de comércio ativo e de excelentes prestadores de serviço', populationBracket: 'medium', nearby: ['São Joaquim da Barra', 'Morro Agudo', 'Nuporanga', 'Franca'] },
  { name: 'Monte Alto', slug: 'monte-alto', region: 'Região de Ribeirão', phrase: 'cidade com excelentes empresas locais e forte comércio', populationBracket: 'medium', nearby: ['Jaboticabal', 'Taquaritinga', 'Bebedouro'] },
  { name: 'Taquaritinga', slug: 'taquaritinga', region: 'Leste Paulista', phrase: 'cidade estudantil e comercial de grande dinamismo regional', populationBracket: 'medium', nearby: ['Monte Alto', 'Matão', 'Itápolis', 'Jaboticabal'] },
  { name: 'Matão', slug: 'matao', region: 'Central Paulista', phrase: 'gigante em indústrias e forte polo de comércio regional', populationBracket: 'large', nearby: ['Araraquara', 'Taquaritinga', 'Dobrada', 'São Carlos'] },
  { name: 'Campinas', slug: 'campinas', region: 'Grande Campinas', phrase: 'um dos maiores mercados de consumo e tecnologia do estado', populationBracket: 'large', nearby: ['Valinhos', 'Vinhedo', 'Sumaré', 'Hortolândia', 'Americana'] },
  { name: 'Piracicaba', slug: 'piracicaba', region: 'Região de Piracicaba', phrase: 'polo industrial vibrante e com comércio local muito forte', populationBracket: 'large', nearby: ['Limeira', 'Rio Claro', 'Americana', 'Tietê'] },
  { name: 'Limeira', slug: 'limeira', region: 'Região de Piracicaba', phrase: 'polo comercial de grande destaque no cenário estadual', populationBracket: 'large', nearby: ['Cordeirópolis', 'Piracicaba', 'Americana', 'Rio Claro'] },
  { name: 'Americana', slug: 'americana', region: 'Grande Campinas', phrase: 'cidade de comércio muito forte e infraestrutura urbana de alto nível', populationBracket: 'large', nearby: ['Sumaré', 'Limeira', 'Campinas'] },
  { name: 'Rio Claro', slug: 'rio-claro', region: 'Região de Piracicaba', phrase: 'importante centro de comércio e empresas na nossa região', populationBracket: 'large', nearby: ['Araras', 'Piracicaba', 'Limeira', 'São Carlos'] },
  { name: 'São José do Rio Preto', slug: 'sao-jose-do-rio-preto', region: 'Noroeste Paulista', phrase: 'principal centro de comércio e serviços médicos de toda a região', populationBracket: 'large', nearby: ['Mirassol', 'Catanduva', 'Votuporanga', 'Barretos'] },
  // Cidades Adicionais
  { name: 'Jundiaí', slug: 'jundiai', region: 'Região de Jundiaí', phrase: 'cidade modelo em novos negócios e forte atração de clientes', populationBracket: 'large', nearby: ['Itupeva', 'Louveira', 'Campinas'] },
  { name: 'Sorocaba', slug: 'sorocaba', region: 'Região de Sorocaba', phrase: 'polo comercial de extrema força econômica no interior', populationBracket: 'large', nearby: ['Votorantim', 'Itu', 'Salto', 'Sorocaba'] },
  { name: 'Bauru', slug: 'bauru', region: 'Central Paulista', phrase: 'grande centro de comércio e polo prestador de serviços regional', populationBracket: 'large', nearby: ['Agudos', 'Pederneiras', 'Jaú'] },
  { name: 'Marília', slug: 'marilia', region: 'Região de Marília', phrase: 'polo de comércio forte e empresas de destaque regional', populationBracket: 'large', nearby: ['Garça', 'Assis', 'Ourinhos'] },
  { name: 'Presidente Prudente', slug: 'presidente-prudente', region: 'Oeste Paulista', phrase: 'cidade polo de serviços e forte comércio regional', populationBracket: 'large', nearby: ['Regente Feijó', 'Martinópolis', 'Assis'] },
  { name: 'Araçatuba', slug: 'aracatuba', region: 'Região de Araçatuba', phrase: 'polo comercial e de agronegócio de grande destaque regional', populationBracket: 'large', nearby: ['Birigui', 'Penápolis', 'Lins'] },
  { name: 'Itu', slug: 'itu', region: 'Região de Sorocaba', phrase: 'cidade turística e de excelentes marcas comerciais', populationBracket: 'large', nearby: ['Salto', 'Sorocaba', 'Indaiatuba'] },
  { name: 'Indaiatuba', slug: 'indaiatuba', region: 'Região de Campinas', phrase: 'polo de novas empresas e excelente qualidade comercial', populationBracket: 'large', nearby: ['Itu', 'Salto', 'Campinas'] },
  { name: 'Hortolândia', slug: 'hortolandia', region: 'Região de Campinas', phrase: 'cidade com forte comércio e empresas prestadoras em plena expansão', populationBracket: 'large', nearby: ['Sumaré', 'Campinas', 'Nova Odessa'] },
  { name: 'Sumaré', slug: 'sumare', region: 'Região de Campinas', phrase: 'segunda maior cidade da região metropolitana com grande comércio', populationBracket: 'large', nearby: ['Americana', 'Hortolândia', 'Campinas'] },
  { name: 'Valinhos', slug: 'valinhos', region: 'Região de Campinas', phrase: 'polo de comércio ativo e de novos negócios nobres', populationBracket: 'large', nearby: ['Campinas', 'Vinhedo', 'Itatiba'] },
  { name: 'Vinhedo', slug: 'vinhedo', region: 'Região de Campinas', phrase: 'cidade de alto poder de compra e excelente para novos negócios', populationBracket: 'medium', nearby: ['Valinhos', 'Louveira', 'Jundiaí', 'Campinas'] },
  { name: 'Itatiba', slug: 'itatiba', region: 'Região de Campinas', phrase: 'cidade acolhedora com comércio de destaque regional', populationBracket: 'large', nearby: ['Valinhos', 'Jundiaí', 'Atibaia'] },
  { name: 'Bragança Paulista', slug: 'braganca-paulista', region: 'Região de Bragança', phrase: 'importante centro universitário e comercial regional', populationBracket: 'large', nearby: ['Atibaia', 'Socorro', 'Itatiba'] },
  { name: 'Atibaia', slug: 'atibaia', region: 'Região de Bragança', phrase: 'polo comercial e de turismo muito forte', populationBracket: 'large', nearby: ['Bragança Paulista', 'Mairiporã', 'Itatiba'] },
  { name: 'São João da Boa Vista', slug: 'sao-joao-da-boa-vista', region: 'Leste Paulista', phrase: 'polo educacional e comercial muito respeitado na região', populationBracket: 'medium', nearby: ['Vargem Grande do Sul', 'Mogi Guaçu', 'Casa Branca'] },
  { name: 'São José dos Campos', slug: 'Vale do Paraíba', phrase: 'grande potência de novos negócios e comércio vibrante', region: 'Vale do Paraíba', populationBracket: 'large', nearby: ['Jacareí', 'Taubaté', 'Campos do Jordão'] },
  { name: 'Taubaté', slug: 'taubate', region: 'Vale do Paraíba', phrase: 'polo comercial tradicional e com excelentes prestadores de serviço', populationBracket: 'large', nearby: ['Pindamonhangaba', 'São José dos Campos', 'Tremembé'] },
  { name: 'Jacareí', slug: 'jacarei', region: 'Vale do Paraíba', phrase: 'cidade polo com forte expansão de marcas comerciais', populationBracket: 'large', nearby: ['São José dos Campos', 'Mogi das Cruzes', 'Caçapava'] },
  { name: 'Pindamonhangaba', slug: 'pindamonhangaba', region: 'Vale do Paraíba', phrase: 'cidade com forte comércio e empresas prestadoras de serviço em destaque', populationBracket: 'large', nearby: ['Taubaté', 'Tremembé', 'Roseira'] },
  { name: 'Santos', slug: 'santos', region: 'Baixada Santista', phrase: 'polo litorâneo com gigantesco comércio e atração de clientes', populationBracket: 'large', nearby: ['São Vicente', 'Guarujá', 'Praia Grande'] },
  { name: 'Guarujá', slug: 'guaruja', region: 'Baixada Santista', phrase: 'cidade com forte comércio de turismo e empresas de destaque', populationBracket: 'large', nearby: ['Santos', 'São Vicente', 'Praia Grande'] },
  { name: 'Praia Grande', slug: 'praia-grande', region: 'Baixada Santista', phrase: 'cidade litorânea em franco crescimento de novos clientes e negócios', populationBracket: 'large', nearby: ['São Vicente', 'Santos', 'Guarujá'] },
  { name: 'Mogi Guaçu', slug: 'mogi-guacu', region: 'Baixa Mogiana', phrase: 'centro comercial de forte prestígio e com ótimas empresas prestadoras', populationBracket: 'large', nearby: ['Mogi Mirim', 'Itapira', 'Estiva Gerbi', 'Araras'] },
  { name: 'Mogi Mirim', slug: 'mogi-mirim', region: 'Baixa Mogiana', phrase: 'cidade com comércio forte, escolas tradicionais e prestadores em crescimento', populationBracket: 'medium', nearby: ['Mogi Guaçu', 'Itapira', 'Artur Nogueira', 'Holambra'] },
  { name: 'Leme', slug: 'leme', region: 'Central Paulista', phrase: 'cidade com comércio vibrante e ótimos prestadores locais', populationBracket: 'large', nearby: ['Araras', 'Pirassununga', 'Rio Claro'] },
  { name: 'Pirassununga', slug: 'pirassununga', region: 'Central Paulista', phrase: 'cidade ativa e polo comercial de referência regional', populationBracket: 'medium', nearby: ['Porto Ferreira', 'Leme', 'Araras'] },
  { name: 'Porto Ferreira', slug: 'porto-ferreira', region: 'Central Paulista', phrase: 'cidade ativa e referência em comércio e decoração regional', populationBracket: 'medium', nearby: ['Pirassununga', 'Descalvado', 'Leme', 'São Carlos'] },
  { name: 'Casa Branca', slug: 'casa-branca', region: 'Leste Paulista', phrase: 'cidade acolhedora com comércio de destaque regional', populationBracket: 'medium', nearby: ['Mococa', 'Tambaú', 'São José do Rio Pardo'] },
  { name: 'Tambaú', slug: 'tambau', region: 'Leste Paulista', phrase: 'cidade acolhedora com comércio local ativo e forte turismo de negócios', populationBracket: 'small', nearby: ['Mococa', 'Casa Branca', 'Porto Ferreira'] },
  { name: 'Santa Rosa de Viterbo', slug: 'santa-rosa-de-viterbo', region: 'Região de Ribeirão', phrase: 'cidade acolhedora com comércio em plena expansão local', populationBracket: 'small', nearby: ['São Simão', 'Cajuru', 'Tambaú', 'Ribeirão Preto'] }
];

// 11 Serviços Core - Traduzidos para linguagem simples de leigo
export const SERVICES: Record<string, Service> = {
  'criacao-sites': {
    key: 'criacao-sites',
    name: 'Criação de Sites Rápidos',
    icon: 'fa-desktop',
    description: 'Criamos sites profissionais que abrem instantaneamente no celular, passam extrema confiança aos seus clientes e convertem visitas em contatos reais.'
  },
  'ecommerce': {
    key: 'ecommerce',
    name: 'Lojas Virtuais Completas',
    icon: 'fa-shopping-cart',
    description: 'Sua loja online com carrinho fácil, formas de pagamento integradas (PIX e cartão) e controle simples para você vender 24 horas por dia.'
  },
  'seo': {
    key: 'seo',
    name: 'Primeiro Lugar no Google',
    icon: 'fa-search',
    description: 'Posicionamos sua empresa no topo do Google, do ChatGPT e das novas IAs de busca, para quando os clientes pesquisarem pelo seu serviço na sua cidade.'
  },
  'marketing-digital': {
    key: 'marketing-digital',
    name: 'Atração de Clientes',
    icon: 'fa-bullhorn',
    description: 'Campanhas de anúncios profissionais para fazer seu telefone tocar todos os dias com potenciais clientes querendo fechar negócio com você.'
  },
  'landing-pages': {
    key: 'landing-pages',
    name: 'Páginas de Alta Conversão',
    icon: 'fa-bullseye',
    description: 'Páginas curtas e persuasivas feitas especificamente para anúncios, projetadas cientificamente para direcionar o cliente direto para o seu WhatsApp.'
  },
  'trafego-pago': {
    key: 'trafego-pago',
    name: 'Anúncios na Internet',
    icon: 'fa-chart-line',
    description: 'Configuramos e gerenciamos seus anúncios no Google, Instagram e Facebook para fazer o seu negócio aparecer para as pessoas certas na sua região.'
  },
  'automacoes-web': {
    key: 'automacoes-web',
    name: 'Sistemas e Aplicativos',
    icon: 'fa-cog',
    description: 'Criamos aplicativos para celulares e sistemas sob medida para a sua empresa, organizando seus processos de forma automática para economizar horas de trabalho.'
  },
  'ia-para-empresas': {
    key: 'ia-para-empresas',
    name: 'Inteligência Artificial',
    icon: 'fa-robot',
    description: 'Instalamos atendentes inteligentes e automações com IA para responder seus clientes no WhatsApp instantaneamente e fechar orçamentos no piloto automático.'
  },
  'producao-videos': {
    key: 'producao-videos',
    name: 'Produção de Vídeos (Físico ou IA)',
    icon: 'fa-video',
    description: 'Gravamos vídeos institucionais profissionais na sua empresa (com câmera de cinema e drone), ou produzimos vídeos 100% com Inteligência Artificial para poupar seu tempo.'
  },
  'hospedagem': {
    key: 'hospedagem',
    name: 'Hospedagem e Manutenção',
    icon: 'fa-server',
    description: 'Cuidamos de toda a parte técnica, servidores velozes, e-mails comerciais e backup diário para que seu site nunca fique fora do ar.'
  },
  'suporte-web': {
    key: 'suporte-web',
    name: 'Suporte Técnico Direto',
    icon: 'fa-headset',
    description: 'Suporte e atualizações rápidas sempre que você precisar. Fale direto com nosso time e resolva qualquer alteração ou melhoria sem burocracia.'
  }
};

// 15 Nichos de Negócios
export const NICHOS: Record<string, Niche> = {
  'advogados': { key: 'advogados', name: 'Advogados', article: 'para', singularName: 'Advogado' },
  'clinicas': { key: 'clinicas', name: 'Clínicas', article: 'para', singularName: 'Clínica' },
  'medicos': { key: 'medicos', name: 'Médicos', article: 'para', singularName: 'Médico' },
  'restaurantes': { key: 'restaurantes', name: 'Restaurantes', article: 'para', singularName: 'Restaurante' },
  'imobiliarias': { key: 'imobiliarias', name: 'Imobiliárias', article: 'para', singularName: 'Imobiliária' },
  'contabilidade': { key: 'contabilidade', name: 'Contabilidade', article: 'para Escritórios de', singularName: 'Escritório de Contabilidade' },
  'agronegocio': { key: 'agronegocio', name: 'Agronegócio', article: 'para Empresas do', singularName: 'Empresa do Agronegócio' },
  'lojas': { key: 'lojas', name: 'Lojas', article: 'para', singularName: 'Loja' },
  'moda': { key: 'moda', name: 'Moda', article: 'de', singularName: 'Marca de Moda' },
  'academias': { key: 'academias', name: 'Academias', article: 'para', singularName: 'Academia' },
  'construcao': { key: 'construcao', name: 'Construção', article: 'para Construtoras e', singularName: 'Construtora' },
  'estetica': { key: 'estetica', name: 'Estética', article: 'para Clínicas de', singularName: 'Clínica de Estética' },
  'empresas-industriais': { key: 'empresas-industriais', name: 'Empresas Industriais', article: 'para', singularName: 'Indústria' },
  'transportadoras': { key: 'transportadoras', name: 'Transportadoras', article: 'para', singularName: 'Transportadora' },
  'concessionarias': { key: 'concessionarias', name: 'Concessionárias', article: 'para', singularName: 'Concessionária' }
};

// Estrutura das combinações dinâmicas de SEO programático
export interface Combination {
  slug: string;
  serviceKey: string;
  nicheKey?: string;
  title: string;
  shortName: string;
}

// Mapeamento das combinações obrigatórias e extras
export const COMBINATIONS: Combination[] = [
  // 1. Serviços Core Básicos (Sem nicho)
  { slug: 'criacao-sites', serviceKey: 'criacao-sites', title: 'Criação de Sites Rápidos', shortName: 'Criação de Sites' },
  { slug: 'ecommerce', serviceKey: 'ecommerce', title: 'Lojas Virtuais Completas', shortName: 'Lojas Virtuais' },
  { slug: 'seo', serviceKey: 'seo', title: 'Aparecer em Primeiro no Google', shortName: '1º Lugar no Google' },
  { slug: 'marketing-digital', serviceKey: 'marketing-digital', title: 'Atração de Clientes da Região', shortName: 'Atração de Clientes' },
  { slug: 'landing-pages', serviceKey: 'landing-pages', title: 'Páginas de Captura de Clientes', shortName: 'Páginas de Vendas' },
  { slug: 'trafego-pago', serviceKey: 'trafego-pago', title: 'Anúncios e Divulgação Comercial', shortName: 'Anúncios na Internet' },
  { slug: 'automacoes-web', serviceKey: 'automacoes-web', title: 'Sistemas e Aplicativos sob Medida', shortName: 'Sistemas e Apps' },
  { slug: 'ia-para-empresas', serviceKey: 'ia-para-empresas', title: 'Atendimento por Inteligência Artificial', shortName: 'IA para Empresas' },
  { slug: 'producao-videos', serviceKey: 'producao-videos', title: 'Produção de Vídeos de Alta Conversão', shortName: 'Vídeos Comerciais' },
  { slug: 'hospedagem', serviceKey: 'hospedagem', title: 'Hospedagem e Manutenção Profissional', shortName: 'Hospedagem Premium' },
  { slug: 'suporte-web', serviceKey: 'suporte-web', title: 'Suporte Técnico e Atualizações', shortName: 'Suporte Técnico' },

  // 2. Combinações Especiais de Nichos (Conforme especificado no Briefing)
  { slug: 'criacao-sites-advogados', serviceKey: 'criacao-sites', nicheKey: 'advogados', title: 'Criação de Sites para Advogados', shortName: 'Site para Advogados' },
  { slug: 'ecommerce-moda', serviceKey: 'ecommerce', nicheKey: 'moda', title: 'Lojas Virtuais e E-commerce de Moda', shortName: 'E-commerce de Moda' },
  { slug: 'site-para-clinicas', serviceKey: 'criacao-sites', nicheKey: 'clinicas', title: 'Site Profissional para Clínicas e Consultórios', shortName: 'Site para Clínicas' },
  { slug: 'marketing-digital-restaurantes', serviceKey: 'marketing-digital', nicheKey: 'restaurantes', title: 'Atração de Clientes para Restaurantes', shortName: 'Marketing para Restaurantes' },
  
  // 3. Cruzamentos adicionais altamente estratégicos para captar mais tráfego qualificado
  { slug: 'seo-imobiliarias', serviceKey: 'seo', nicheKey: 'imobiliarias', title: 'Aparecer em Primeiro no Google para Imobiliárias', shortName: '1º Lugar no Google' },
  { slug: 'landing-pages-medicos', serviceKey: 'landing-pages', nicheKey: 'medicos', title: 'Páginas de Agendamento Rápido para Médicos', shortName: 'Páginas para Médicos' },
  { slug: 'criacao-sites-contabilidade', serviceKey: 'criacao-sites', nicheKey: 'contabilidade', title: 'Criação de Sites para Escritórios de Contabilidade', shortName: 'Site para Contabilidade' },
  { slug: 'marketing-digital-agronegocio', serviceKey: 'marketing-digital', nicheKey: 'agronegocio', title: 'Atração de Clientes para Empresas de Agronegócio', shortName: 'Marketing para Agronegócio' },
  { slug: 'seo-academias', serviceKey: 'seo', nicheKey: 'academias', title: 'Primeiro Lugar no Google para Academias e Studios', shortName: 'SEO para Academias' },
  { slug: 'criacao-sites-construcao', serviceKey: 'criacao-sites', nicheKey: 'construcao', title: 'Criação de Sites para Construtoras e Empreiteiras', shortName: 'Site para Construtoras' },
  { slug: 'landing-pages-estetica', serviceKey: 'landing-pages', nicheKey: 'estetica', title: 'Páginas de Agendamento para Clínicas de Estética', shortName: 'Páginas para Estética' },
  { slug: 'criacao-sites-empresas-industriais', serviceKey: 'criacao-sites', nicheKey: 'empresas-industriais', title: 'Criação de Sites para Indústrias e Fábricas B2B', shortName: 'Site para Indústrias' },
  { slug: 'marketing-digital-transportadoras', serviceKey: 'marketing-digital', nicheKey: 'transportadoras', title: 'Atração de Clientes para Transportadoras e Cargas', shortName: 'Marketing para Transportadoras' },
  { slug: 'criacao-sites-concessionarias', serviceKey: 'criacao-sites', nicheKey: 'concessionarias', title: 'Criação de Sites para Lojas de Carros e Concessionárias', shortName: 'Site para Concessionárias' }
];

// Spintax Helper - Escolhe de forma determinística uma variação de texto baseada no comprimento do slug+cidade
function selectVariant(citySlug: string, keySlug: string, variants: string[]): string {
  const hash = citySlug.length + keySlug.length;
  return variants[hash % variants.length];
}

// Engine Geradora de Conteúdo Estruturado por Página
export function generateSEOContent(city: City, combo: Combination): SEOPageData {
  const srv = SERVICES[combo.serviceKey];
  const nich = combo.nicheKey ? NICHOS[combo.nicheKey] : undefined;

  const cityName = city.name;
  const cityRegion = city.region;
  const cityPhrase = city.phrase;
  const serviceName = srv.name;

  // Títulos e Metas Únicos
  let title = combo.title;
  let shortName = combo.shortName;
  if (nich) {
    title = `${srv.name} ${nich.article} ${nich.name}`;
  }

  const metaTitle = `${title} em ${cityName} | Colocamos Você em 1º no Google`;
  
  const metaDescription = nich
    ? `Quer atrair mais clientes para seu negócio de ${nich.name.toLowerCase()} em ${cityName}? Colocamos você em 1º no Google, ChatGPT e Gemini. Projetos liderados por Guilherme Miranda.`
    : `Criação de ${serviceName.toLowerCase()} em ${cityName} e região. Seu site abrindo na hora no celular, atraindo leads no WhatsApp e faturando mais. Fale com Guilherme Miranda!`;

  // Introdução Dinâmica baseada em Spintax simplificado (Leigo)
  const introVariants = [
    `Se você tem um negócio em **${cityName}** e quer crescer, a verdade é simples: quando as pessoas precisam do seu serviço, elas pesquisam no Google, no ChatGPT ou no Gemini. Sendo **${cityPhrase}**, a concorrência local é forte. Contar com uma estrutura profissional de **${title}** desenvolvida pela nossa equipe é a forma mais rápida e barata de fazer o seu telefone tocar todos os dias com novos clientes querendo fechar negócio com você.`,
    
    `A sua empresa em **${cityName}** está sendo encontrada na internet por quem quer comprar? Para marcas de destaque na **${cityRegion}**, a visibilidade é tudo. Guilherme Miranda, desenvolvedor sênior com 26 anos de experiência e mais de 1.200 projetos entregues de sucesso, comanda a equipe técnica da Miranda Tech para colocar a sua estrutura de **${title}** em primeiro lugar nas pesquisas locais e IAs, atraindo mais faturamento.`,
    
    `Muitas empresas em **${cityName}** perdem vendas todos os dias simplesmente porque os seus sites são antigos, travam no celular ou não aparecem quando o cliente pesquisa. Com o nosso serviço de **${title}**, você ganha um site extremamente rápido, moderno e estruturado especificamente para converter visitantes curiosos em contatos quentes no seu WhatsApp comercial, garantindo presença dominante em toda a **${cityRegion}**.`
  ];
  
  const introduction = selectVariant(city.slug, combo.slug, introVariants);

  // Conteúdo Principal dinâmico citando dores do nicho
  let mainContent = '';
  if (nich) {
    const nichDores = [
      `Para quem tem uma empresa de **${nich.name.toLowerCase()}** em **${cityName}**, os velhos jeitos de conseguir clientes já não funcionam bem. Hoje, quem precisa de um ${nich.singularName.toLowerCase()} vai direto ao Google e às Inteligências Artificiais de busca. Nosso projeto de **${title}** é feito especificamente para as necessidades de sua área, passando extrema credibilidade, carregando instantaneamente na tela do celular do cliente e direcionando o contato diretamente para o WhatsApp de atendimento do seu escritório ou consultório na **${cityRegion}**.`,
      
      `A concorrência em **${nich.name.toLowerCase()}** na cidade de **${cityName}** cresce a cada dia. Para se destacar e atrair os melhores clientes da região, você precisa de um posicionamento de alto nível. Guilherme Miranda e a equipe técnica da Miranda Tech criam soluções de **${title}** focadas 100% em conversão e facilidade. Criamos um canal limpo e confiável, livre de travamentos ou lentidões, garantindo que quem procura pelos seus serviços na internet feche negócio com você em vez de ir para o seu concorrente.`,
      
      `Ter uma plataforma profissional de **${title}** é o melhor investimento que você pode fazer pelo seu negócio de **${nich.name.toLowerCase()}** em **${cityName}**. Chega de depender de indicações instáveis ou de gastar dinheiro com agências amadoras. Entregamos um sistema rápido, moderno e muito simples de gerenciar, onde a sua marca ganha a autoridade de quem tem mais de 26 anos de mercado coordenando a entrega de cada detalhe.`
    ];
    mainContent = selectVariant(city.slug, combo.slug, nichDores);
  } else {
    const srvDores = [
      `Investir em **${serviceName}** na cidade de **${cityName}** é a forma ideal de aumentar os seus lucros locais sem desperdiçar verba de publicidade. Criamos páginas e sistemas extremamente rápidos que funcionam sem lentidões desnecessárias, permitindo que a sua marca na **${cityRegion}** conquiste a confiança dos clientes e apareça em 1º nas buscas diárias feitas pelo celular ou computador.`,
      
      `Nossos projetos de **${serviceName}** para empresas em **${cityName}** se diferenciam por um ponto central: eles são feitos para vender de forma simples. Cada imagem, texto e botão é planejado para que quem acesse a página entenda o seu valor de forma direta, enviando uma mensagem no WhatsApp sem precisar preencher formulários compridos ou lidar com sistemas complicados.`,
      
      `Se a sua marca em **${cityName}** precisa de mais vendas e de uma assessoria séria para crescer, Guilherme Miranda oferece a segurança de 26 anos de estrada prática e mais de 1.200 softwares comercializados. Unimos o melhor do design moderno, anúncios focados e automações simples para criar soluções eficientes que trazem retorno financeiro claro para o seu caixa.`
    ];
    mainContent = selectVariant(city.slug, combo.slug, srvDores);
  }

  // Benefícios traduzidos para leigo
  const benefits = nich
    ? [
        `Design elegante e moderno personalizado para ${nich.name.toLowerCase()} em ${cityName}`,
        `Site extremamente rápido que abre na hora no celular do cliente (sem travar)`,
        `Sua empresa em primeiro lugar no Google e nos chatbots de IA (ChatGPT, Gemini)`,
        `Botão de WhatsApp visível e configurado para facilitar o contato imediato`,
        `Garantia técnica direta de quem tem 26 anos de experiência (Guilherme Miranda)`
      ]
    : [
        `Páginas super rápidas que passam extrema confiança e profissionalismo`,
        `Otimização completa para sua marca aparecer quando clientes pesquisarem em ${cityName}`,
        `Hospedagem profissional com e-mails comerciais e backup diário inclusos`,
        `Integração automática com o seu WhatsApp para captura rápida de contatos`,
        `Equipe robusta da Miranda Tech liderada pessoalmente por Guilherme Miranda`
      ];

  // FAQ traduzido para leigo
  const faqs = nich
    ? [
        {
          question: `Como funciona o serviço de ${title} em ${cityName}?`,
          answer: `Nossa equipe cria um site profissional de alto nível específico para negócios de ${nich.name.toLowerCase()} em ${cityName}. Focamos na velocidade de carregamento e na facilidade de contato. Colocamos o site em primeiro lugar nas pesquisas do Google e IAs locais para que os clientes da região encontrem você facilmente e mandem mensagem no seu WhatsApp.`
        },
        {
          question: `Qual o prazo para colocar meu site de ${shortName} no ar?`,
          answer: `O prazo médio é de 10 a 20 dias úteis. Nossa equipe desenvolve o projeto completo de forma ágil, testando a velocidade e o funcionamento no celular, entregando uma estrutura pronta para receber clientes comerciais.`
        },
        {
          question: `Por que escolher a Miranda Tech liderada por Guilherme Miranda?`,
          answer: `Diferente de profissionais amadores ou agências genéricas que entregam sites lentos, nós construímos plataformas limpas e seguras. Com a liderança técnica de Guilherme Miranda (26 anos de TI e 1.200+ projetos entregues), unimos a força de uma equipe de especialistas à segurança de um atendimento sênior personalizado.`
        }
      ]
    : [
        {
          question: `Como o serviço de ${serviceName} vai trazer mais clientes em ${cityName}?`,
          answer: `Ao criar um canal rápido, limpo e com posicionamento no topo do Google, ChatGPT e Gemini, as pessoas da região de ${cityName} que já estão procurando pelo que você oferece vão encontrar a sua marca primeiro. A velocidade extrema evita que elas desistam e fechem com o seu concorrente.`
        },
        {
          question: `O site de minha empresa vai funcionar bem no celular?`,
          answer: `Sim, 100%! Todos os nossos projetos são desenhados focando no acesso pelo celular, já que mais de 85% dos contatos e vendas locais de serviços de TI e corporativos hoje são feitos por dispositivos móveis.`
        },
        {
          question: `A empresa atende pequenas e grandes empresas em ${cityName}?`,
          answer: `Sim! Sob o comando de Guilherme Miranda, que tem 26 anos de experiência comercial trabalhando com comércios locais e multinacionais, nossa equipe está preparada para entregar a mesma robustez técnica e qualidade tanto para pequenos consultórios quanto para grandes operações industriais.`
        }
      ];

  // Chamada de Conversão Contextualizada
  const cta = nich
    ? `Olá Guilherme Miranda, simulei a criação de ${title} em ${cityName} no site. Gostaria de solicitar um orçamento para o meu negócio de ${nich.name.toLowerCase()}.`
    : `Olá Guilherme Miranda, vi a página de ${serviceName} em ${cityName}. Gostaria de mais informações e de um orçamento grátis para minha empresa.`;

  return {
    slug: combo.slug,
    serviceKey: combo.serviceKey,
    nicheKey: combo.nicheKey,
    title,
    metaTitle,
    metaDescription,
    introduction,
    mainContent,
    benefits,
    faqs,
    cta
  };
}
