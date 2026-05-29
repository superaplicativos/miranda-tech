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
  article: string; // "para" | "de" | "para clínicas de" etc.
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
  { name: 'Ribeirão Preto', slug: 'ribeirao-preto', region: 'Região Metropolitana de Ribeirão Preto', phrase: 'maior potência tecnológica e de agronegócio do interior paulista', populationBracket: 'large', nearby: ['Cravinhos', 'Jardinópolis', 'Sertãozinho', 'Brodowski', 'Batatais'] },
  { name: 'Franca', slug: 'franca', region: 'Região de Franca', phrase: 'a capital nacional do calçado e importante polo econômico da Alta Mogiana', populationBracket: 'large', nearby: ['Batatais', 'Patrocínio Paulista', 'Claraval', 'Restinga', 'Orlândia'] },
  { name: 'Mococa', slug: 'mococa', region: 'Mantiqueira/Leste Paulista', phrase: 'histórica e vibrante cidade de forte potencial agrícola e comercial', populationBracket: 'medium', nearby: ['Tambaú', 'Casa Branca', 'Cajuru', 'Arceburgo', 'Tapiratiba'] },
  { name: 'Sertãozinho', slug: 'sertaozinho', region: 'Região Metropolitana de Ribeirão Preto', phrase: 'um dos maiores polos industriais e metalmecânicos do Brasil', populationBracket: 'large', nearby: ['Ribeirão Preto', 'Pontal', 'Dumont', 'Barrinha', 'Jardinópolis'] },
  { name: 'Batatais', slug: 'batatais', region: 'Região da Alta Mogiana', phrase: 'cidade histórica, turística e de riquíssima tradição agroindustrial', populationBracket: 'medium', nearby: ['Brodowski', 'Franca', 'Altinópolis', 'Ribeirão Preto', 'Cravinhos'] },
  { name: 'Jaboticabal', slug: 'jaboticabal', region: 'Região de Ribeirão Preto', phrase: 'a terra das rosas e polo educacional de destaque tecnológico', populationBracket: 'medium', nearby: ['Bebedouro', 'Monte Alto', 'Taquaritinga', 'Matão', 'Sertãozinho'] },
  { name: 'Bebedouro', slug: 'bebedouro', region: 'Região de Barretos', phrase: 'polo citrícola e centro logístico de grande relevância regional', populationBracket: 'medium', nearby: ['Jaboticabal', 'Barretos', 'Monte Azul Paulista', 'Colina', 'Viradouro'] },
  { name: 'São Carlos', slug: 'sao-carlos', region: 'Região Central Paulista', phrase: 'capital nacional da tecnologia, inovação e excelência acadêmica', populationBracket: 'large', nearby: ['Araraquara', 'Ibaté', 'Ribeirão Bonito', 'Descalvado', 'Porto Ferreira'] },
  { name: 'Araraquara', slug: 'araraquara', region: 'Região Central Paulista', phrase: 'referência nacional em qualidade de vida, indústria e comércio forte', populationBracket: 'large', nearby: ['São Carlos', 'Matão', 'Américo Brasiliense', 'Ibitinga', 'Ibiporã'] },
  { name: 'Barretos', slug: 'barretos', region: 'Região de Barretos', phrase: 'capital nacional do rodeio e referência internacional em saúde', populationBracket: 'large', nearby: ['Bebedouro', 'Colina', 'Guaíra', 'Olímpia', 'Franca'] },
  { name: 'Cravinhos', slug: 'cravinhos', region: 'Região Metropolitana de Ribeirão Preto', phrase: 'polo industrial em franco crescimento e localização estratégica na Rodovia Anhanguera', populationBracket: 'medium', nearby: ['Ribeirão Preto', 'Serrana', 'São Simão', 'Luis Antônio', 'Brodowski'] },
  { name: 'Jardinópolis', slug: 'jardinopolis', region: 'Região Metropolitana de Ribeirão Preto', phrase: 'cidade de forte dinamismo econômico e proximidade com grandes centros', populationBracket: 'medium', nearby: ['Ribeirão Preto', 'Brodowski', 'Sertãozinho', 'Sales Oliveira', 'Pontal'] },
  { name: 'Cajuru', slug: 'cajuru', region: 'Região de Ribeirão Preto', phrase: 'cidade acolhedora com forte base agropecuária e comércio local em expansão', populationBracket: 'medium', nearby: ['Cássia dos Coqueiros', 'Mococa', 'Santa Cruz da Esperança', 'Santo Antônio da Alegria', 'Altinópolis'] },
  { name: 'Brodowski', slug: 'brodowski', region: 'Região Metropolitana de Ribeirão Preto', phrase: 'terra natal do pintor Portinari e polo de forte identidade cultural', populationBracket: 'medium', nearby: ['Batatais', 'Ribeirão Preto', 'Jardinópolis', 'Cravinhos', 'Altinópolis'] },
  { name: 'Orlândia', slug: 'orlandia', region: 'Região de Franca', phrase: 'polo industrial de alta performance na região da Alta Mogiana', populationBracket: 'medium', nearby: ['São Joaquim da Barra', 'Sales Oliveira', 'Morro Agudo', 'Nuporanga', 'Franca'] },
  { name: 'Monte Alto', slug: 'monte-alto', region: 'Região de Ribeirão Preto', phrase: 'polo de metalurgia, fundição e turismo arqueológico', populationBracket: 'medium', nearby: ['Jaboticabal', 'Taquaritinga', 'Vista Alegre do Alto', 'Cândido Rodrigues', 'Bebedouro'] },
  { name: 'Taquaritinga', slug: 'taquaritinga', region: 'Região de Ribeirão Preto', phrase: 'cidade estudantil e polo agrícola do Leste Paulista', populationBracket: 'medium', nearby: ['Monte Alto', 'Matão', 'Itápolis', 'Santa Ernestina', 'Jaboticabal'] },
  { name: 'Matão', slug: 'matao', region: 'Região Central Paulista', phrase: 'gigante da agroindústria cítrica e polo metalmecânico regional', populationBracket: 'large', nearby: ['Araraquara', 'Taquaritinga', 'Dobrada', 'Motuca', 'São Carlos'] },
  { name: 'Campinas', slug: 'campinas', region: 'Região Metropolitana de Campinas', phrase: 'maior polo de tecnologia da América Latina e metrópole interiorana vibrante', populationBracket: 'large', nearby: ['Valinhos', 'Vinhedo', 'Sumaré', 'Hortolândia', 'Americana'] },
  { name: 'Piracicaba', slug: 'piracicaba', region: 'Região de Piracicaba', phrase: 'polo da bioenergia, agrotecnologia e pujança industrial paulista', populationBracket: 'large', nearby: ['Limeira', 'Rio Claro', 'Santa Bárbara d\'Oeste', 'Americana', 'Tietê'] },
  { name: 'Limeira', slug: 'limeira', region: 'Região de Piracicaba', phrase: 'capital nacional da joia folheada e polo industrial estratégico', populationBracket: 'large', nearby: ['Cordeirópolis', 'Iracemápolis', 'Piracicaba', 'Americana', 'Rio Claro'] },
  { name: 'Americana', slug: 'americana', region: 'Região Metropolitana de Campinas', phrase: 'histórico polo têxtil e comercial de altíssima infraestrutura urbana', populationBracket: 'large', nearby: ['Santa Bárbara d\'Oeste', 'Nova Odessa', 'Sumaré', 'Limeira', 'Campinas'] },
  { name: 'Rio Claro', slug: 'rio-claro', region: 'Região de Piracicaba', phrase: 'importante centro ferroviário, cerâmico e de produção industrial', populationBracket: 'large', nearby: ['Santa Gertrudes', 'Araras', 'Piracicaba', 'Limeira', 'São Carlos'] },
  { name: 'São José do Rio Preto', slug: 'sao-jose-do-rio-preto', region: 'Região de Rio Preto', phrase: 'principal centro comercial, médico e de serviços do Noroeste Paulista', populationBracket: 'large', nearby: ['Mirassol', 'Bady Bassitt', 'Catanduva', 'Votuporanga', 'Barretos'] },
  // Adicionais para volumetria e domínio regional do SEO Programático
  { name: 'Jundiaí', slug: 'jundiai', region: 'Região Metropolitana de Jundiaí', phrase: 'uma das melhores cidades do país para negócios e infraestrutura de logística', populationBracket: 'large', nearby: ['Várzea Paulista', 'Campo Limpo Paulista', 'Itupeva', 'Louveira', 'Campinas'] },
  { name: 'Sorocaba', slug: 'sorocaba', region: 'Região Metropolitana de Sorocaba', phrase: 'gigante industrial metalmecânico e polo tecnológico do sudoeste paulista', populationBracket: 'large', nearby: ['Votorantim', 'Itu', 'Salto', 'Araçoiaba da Serra', 'Iperó'] },
  { name: 'Bauru', slug: 'bauru', region: 'Região de Bauru', phrase: 'polo educacional, comercial e de serviços médico-odontológicos do Centro-Oeste paulista', populationBracket: 'large', nearby: ['Agudos', 'Pederneiras', 'Duartina', 'Piratininga', 'Jaú'] },
  { name: 'Marília', slug: 'marilia', region: 'Região de Marília', phrase: 'capital nacional do alimento e forte centro universitário e digital', populationBracket: 'large', nearby: ['Pompéia', 'Garça', 'Vera Cruz', 'Assis', 'Ourinhos'] },
  { name: 'Presidente Prudente', slug: 'presidente-prudente', region: 'Região de Presidente Prudente', phrase: 'capital do Oeste Paulista e polo de serviços de altíssima influência regional', populationBracket: 'large', nearby: ['Álvares Machado', 'Pirapozinho', 'Regente Feijó', 'Martinópolis', 'Assis'] },
  { name: 'Araçatuba', slug: 'aracatuba', region: 'Região de Araçatuba', phrase: 'polo do setor sucroenergético e agropecuária de alta tecnologia', populationBracket: 'large', nearby: ['Birigui', 'Guararapes', 'Penápolis', 'Bilac', 'Lins'] },
  { name: 'Itu', slug: 'itu', region: 'Região de Sorocaba', phrase: 'cidade histórica, turística e polo de condomínios residenciais de alto padrão', populationBracket: 'large', nearby: ['Salto', 'Sorocaba', 'Porto Feliz', 'Indaiatuba', 'Cabreúva'] },
  { name: 'Indaiatuba', slug: 'indaiatuba', region: 'Região Metropolitana de Campinas', phrase: 'cidade modelo de segurança, polo industrial automotivo e qualidade de vida', populationBracket: 'large', nearby: ['Itu', 'Salto', 'Campinas', 'Elias Fausto', 'Valinhos'] },
  { name: 'Hortolândia', slug: 'hortolandia', region: 'Região Metropolitana de Campinas', phrase: 'polo tecnológico de data centers e indústrias de ponta no interior', populationBracket: 'large', nearby: ['Sumaré', 'Campinas', 'Monte Mor', 'Americana', 'Nova Odessa'] },
  { name: 'Sumaré', slug: 'sumare', region: 'Região Metropolitana de Campinas', phrase: 'segunda maior cidade da região metropolitana com forte polo fabril e logístico', populationBracket: 'large', nearby: ['Nova Odessa', 'Americana', 'Hortolândia', 'Campinas', 'Paulínia'] },
  { name: 'Valinhos', slug: 'valinhos', region: 'Região Metropolitana de Campinas', phrase: 'terra da figo roxo e importante polo logístico e imobiliário de luxo', populationBracket: 'large', nearby: ['Campinas', 'Vinhedo', 'Itatiba', 'Indaiatuba', 'Louveira'] },
  { name: 'Vinhedo', slug: 'vinhedo', region: 'Região Metropolitana de Campinas', phrase: 'cidade de alto padrão socioeconômico e infraestrutura industrial privilegiada', populationBracket: 'medium', nearby: ['Valinhos', 'Louveira', 'Jundiaí', 'Itupeva', 'Campinas'] },
  { name: 'Itatiba', slug: 'itatiba', region: 'Região Metropolitana de Campinas', phrase: 'polo moveleiro e têxtil com forte qualidade de vida e crescimento industrial', populationBracket: 'large', nearby: ['Valinhos', 'Jundiaí', 'Bragança Paulista', 'Morungaba', 'Atibaia'] },
  { name: 'Bragança Paulista', slug: 'braganca-paulista', region: 'Região Bragantina', phrase: 'polo universitário e turístico na Região da Serra da Mantiqueira', populationBracket: 'large', nearby: ['Atibaia', 'Itatiba', 'Piracaia', 'Extrema', 'Socorro'] },
  { name: 'Atibaia', slug: 'atibaia', region: 'Região Bragantina', phrase: 'cidade das flores e do morango, polo turístico e de condomínios nobres', populationBracket: 'large', nearby: ['Bragança Paulista', 'Mairiporã', 'Itatiba', 'Bom Jesus dos Perdões', 'Guarulhos'] },
  { name: 'São João da Boa Vista', slug: 'sao-joao-da-boa-vista', region: 'Leste Paulista', phrase: 'centro universitário e comercial de altíssima relevância na divisa mineira', populationBracket: 'medium', nearby: ['Águas da Prata', 'Vargem Grande do Sul', 'Espírito Santo do Pinhal', 'Mogi Guaçu', 'Casa Branca'] },
  { name: 'São José dos Campos', slug: 'sao-jose-dos-campos', region: 'Vale do Paraíba', phrase: 'principal polo aeroespacial, tecnológico e de defesa da América do Sul', populationBracket: 'large', nearby: ['Jacareí', 'Caçapava', 'Taubaté', 'Campos do Jordão', 'Mogi das Cruzes'] },
  { name: 'Taubaté', slug: 'taubate', region: 'Vale do Paraíba', phrase: 'tradicional polo industrial metalúrgico e importante centro universitário', populationBracket: 'large', nearby: ['Pindamonhangaba', 'São José dos Campos', 'Caçapava', 'Tremembé', 'Ubatuba'] },
  { name: 'Jacareí', slug: 'jacarei', region: 'Vale do Paraíba', phrase: 'polo industrial estratégico conectado diretamente ao eixo Rio-São Paulo', populationBracket: 'large', nearby: ['São José dos Campos', 'Santa Isabel', 'Mogi das Cruzes', 'Caçapava', 'Guarulhos'] },
  { name: 'Pindamonhangaba', slug: 'pindamonhangaba', region: 'Vale do Paraíba', phrase: 'capital da metalurgia pesada e reciclagem de alumínio do interior', populationBracket: 'large', nearby: ['Taubaté', 'Tremembé', 'Roseira', 'Aparecida', 'Campos do Jordão'] },
  { name: 'Santos', slug: 'santos', region: 'Baixada Santista', phrase: 'maior porto da América Latina e grandioso centro logístico nacional', populationBracket: 'large', nearby: ['São Vicente', 'Guarujá', 'Cubatão', 'Praia Grande', 'Bertioga'] },
  { name: 'Guarujá', slug: 'guaruja', region: 'Baixada Santista', phrase: 'pérola do Atlântico e polo de turismo e negócios navais', populationBracket: 'large', nearby: ['Santos', 'Bertioga', 'São Vicente', 'Cubatão', 'Praia Grande'] },
  { name: 'Praia Grande', slug: 'praia-grande', region: 'Baixada Santista', phrase: 'cidade litorânea de maior crescimento habitacional e comercial da costa paulista', populationBracket: 'large', nearby: ['São Vicente', 'Mongaguá', 'Santos', 'Guarujá', 'Itanhaém'] },
  { name: 'Mogi Guaçu', slug: 'mogi-guacu', region: 'Região da Baixa Mogiana', phrase: 'importante centro cerâmico, papeleiro e polo de comércio de destaque regional', populationBracket: 'large', nearby: ['Mogi Mirim', 'Itapira', 'Estiva Gerbi', 'Espírito Santo do Pinhal', 'Araras'] },
  { name: 'Mogi Mirim', slug: 'mogi-mirim', region: 'Região da Baixa Mogiana', phrase: 'polo educacional, agroindustrial e comercial de forte localização estratégica', populationBracket: 'medium', nearby: ['Mogi Guaçu', 'Itapira', 'Artur Nogueira', 'Conchal', 'Holambra'] },
  { name: 'Leme', slug: 'leme', region: 'Região Central Paulista', phrase: 'polo de agricultura e indústrias em forte desenvolvimento estrutural', populationBracket: 'large', nearby: ['Araras', 'Pirassununga', 'Santa Cruz da Conceição', 'Porto Ferreira', 'Rio Claro'] },
  { name: 'Pirassununga', slug: 'pirassununga', region: 'Região Central Paulista', phrase: 'capital nacional da cachaça e sede da prestigiada Academia da Força Aérea', populationBracket: 'medium', nearby: ['Porto Ferreira', 'Leme', 'Santa Cruz das Palmeiras', 'Descalvado', 'Araras'] },
  { name: 'Porto Ferreira', slug: 'porto-ferreira', region: 'Região Central Paulista', phrase: 'capital nacional da cerâmica artística e decoração', populationBracket: 'medium', nearby: ['Pirassununga', 'Descalvado', 'Santa Cruz das Palmeiras', 'Leme', 'São Carlos'] },
  { name: 'Casa Branca', slug: 'casa-branca', region: 'Leste Paulista', phrase: 'capital nacional da jabuticaba e terra de forte tradição citrícola e histórica', populationBracket: 'medium', nearby: ['Mococa', 'Tambaú', 'Itobi', 'São José do Rio Pardo', 'Vargem Grande do Sul'] },
  { name: 'Tambaú', slug: 'tambau', region: 'Leste Paulista', phrase: 'polo nacional de cerâmica estrutural e forte turismo religioso', populationBracket: 'small', nearby: ['Mococa', 'Santa Cruz das Palmeiras', 'Casa Branca', 'Porto Ferreira', 'Ibiporã'] },
  { name: 'Santa Rosa de Viterbo', slug: 'santa-rosa-de-viterbo', region: 'Região de Ribeirão Preto', phrase: 'cidade acolhedora com forte base agroindustrial e localização estratégica', populationBracket: 'small', nearby: ['São Simão', 'Cajuru', 'Tambaú', 'Santa Cruz das Palmeiras', 'Ribeirão Preto'] }
];

// 11 Serviços Core
export const SERVICES: Record<string, Service> = {
  'criacao-sites': {
    key: 'criacao-sites',
    name: 'Criação de Sites',
    icon: 'fa-desktop',
    description: 'Desenvolvimento de sites institucionais sob medida, extremamente rápidos, responsivos e focados na conversão de visitantes em clientes reais.'
  },
  'ecommerce': {
    key: 'ecommerce',
    name: 'E-commerce',
    icon: 'fa-shopping-cart',
    description: 'Lojas virtuais completas com carrinhos intuitivos, integração com gateways de pagamento, checkout transparente e gestão simplificada de vendas.'
  },
  'seo': {
    key: 'seo',
    name: 'SEO & Otimização',
    icon: 'fa-search',
    description: 'Otimização avançada nos motores de busca para garantir posicionamento orgânico na primeira página do Google de forma sustentável e agressiva.'
  },
  'marketing-digital': {
    key: 'marketing-digital',
    name: 'Marketing Digital',
    icon: 'fa-bullhorn',
    description: 'Planejamento estratégico de marketing para gerar vendas consistentes e consolidar a relevância digital da sua marca no mercado regional.'
  },
  'landing-pages': {
    key: 'landing-pages',
    name: 'Landing Pages',
    icon: 'fa-bullseye',
    description: 'Páginas de captura otimizadas para tráfego pago (Google/Meta Ads), projetadas cientificamente para converter cliques em leads no WhatsApp.'
  },
  'trafego-pago': {
    key: 'trafego-pago',
    name: 'Tráfego Pago',
    icon: 'fa-chart-line',
    description: 'Criação e otimização de campanhas de alta performance no Google Ads, Instagram Ads e Facebook Ads para retorno imediato do investimento.'
  },
  'automacoes-web': {
    key: 'automacoes-web',
    name: 'Automações Web',
    icon: 'fa-cog',
    description: 'Automação de fluxos de trabalho, conectando seu site a CRMs, ERPs, planilhas e e-mails para eliminar tarefas manuais e economizar tempo.'
  },
  'ia-para-empresas': {
    key: 'ia-para-empresas',
    name: 'IA para Empresas',
    icon: 'fa-robot',
    description: 'Implementação prática de inteligência artificial, agentes autônomos e chatbots integrados para revolucionar o atendimento e operações comerciais.'
  },
  'producao-videos': {
    key: 'producao-videos',
    name: 'Produção de Vídeos',
    icon: 'fa-video',
    description: 'Produção e edição de vídeos institucionais, comerciais de alta definição e reels para mídias digitais que engajam e geram alto impacto visual.'
  },
  'hospedagem': {
    key: 'hospedagem',
    name: 'Hospedagem Premium',
    icon: 'fa-server',
    description: 'Hospedagem ultraveloz em servidores VPS de alta segurança, com backup diário, e-mails corporativos integrados e 99.9% de uptime garantido.'
  },
  'suporte-web': {
    key: 'suporte-web',
    name: 'Suporte Web',
    icon: 'fa-headset',
    description: 'Manutenção periódica, correções técnicas, atualizações de segurança e suporte direto para garantir que sua plataforma funcione de forma estável.'
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
  { slug: 'criacao-sites', serviceKey: 'criacao-sites', title: 'Criação de Sites Profissionais', shortName: 'Criação de Sites' },
  { slug: 'ecommerce', serviceKey: 'ecommerce', title: 'Desenvolvimento de E-commerce', shortName: 'E-commerce' },
  { slug: 'seo', serviceKey: 'seo', title: 'SEO e Otimização de Sites', shortName: 'SEO Otimização' },
  { slug: 'marketing-digital', serviceKey: 'marketing-digital', title: 'Consultoria de Marketing Digital', shortName: 'Marketing Digital' },
  { slug: 'landing-pages', serviceKey: 'landing-pages', title: 'Criação de Landing Pages de Alta Conversão', shortName: 'Landing Pages' },
  { slug: 'trafego-pago', serviceKey: 'trafego-pago', title: 'Gestão de Tráfego Pago', shortName: 'Tráfego Pago' },
  { slug: 'automacoes-web', serviceKey: 'automacoes-web', title: 'Automação de Processos Web', shortName: 'Automações Web' },
  { slug: 'ia-para-empresas', serviceKey: 'ia-para-empresas', title: 'Inteligência Artificial para Negócios', shortName: 'IA para Empresas' },
  { slug: 'producao-videos', serviceKey: 'producao-videos', title: 'Produção de Vídeo Corporativo', shortName: 'Produção de Vídeos' },
  { slug: 'hospedagem', serviceKey: 'hospedagem', title: 'Hospedagem VPS Premium', shortName: 'Hospedagem Premium' },
  { slug: 'suporte-web', serviceKey: 'suporte-web', title: 'Suporte Técnico e Manutenção Web', shortName: 'Suporte Web' },

  // 2. Combinações Especiais de Nichos (Conforme especificado no Briefing)
  { slug: 'criacao-sites-advogados', serviceKey: 'criacao-sites', nicheKey: 'advogados', title: 'Criação de Sites para Advogados', shortName: 'Site para Advogados' },
  { slug: 'ecommerce-moda', serviceKey: 'ecommerce', nicheKey: 'moda', title: 'E-commerce de Moda', shortName: 'Lojas Virtuais de Moda' },
  { slug: 'site-para-clinicas', serviceKey: 'criacao-sites', nicheKey: 'clinicas', title: 'Site para Clínicas de Saúde', shortName: 'Site para Clínicas' },
  { slug: 'marketing-digital-restaurantes', serviceKey: 'marketing-digital', nicheKey: 'restaurantes', title: 'Marketing Digital para Restaurantes', shortName: 'Marketing para Restaurantes' },
  
  // 3. Cruzamentos adicionais altamente estratégicos para captar mais tráfego qualificado
  { slug: 'seo-imobiliarias', serviceKey: 'seo', nicheKey: 'imobiliarias', title: 'SEO e Otimização para Imobiliárias', shortName: 'SEO para Imobiliárias' },
  { slug: 'landing-pages-medicos', serviceKey: 'landing-pages', nicheKey: 'medicos', title: 'Landing Pages de Alta Conversão para Médicos', shortName: 'Landing Pages para Médicos' },
  { slug: 'criacao-sites-contabilidade', serviceKey: 'criacao-sites', nicheKey: 'contabilidade', title: 'Criação de Sites para Escritórios de Contabilidade', shortName: 'Site para Contabilidade' },
  { slug: 'marketing-digital-agronegocio', serviceKey: 'marketing-digital', nicheKey: 'agronegocio', title: 'Marketing Digital para Empresas de Agronegócio', shortName: 'Marketing para Agronegócio' },
  { slug: 'seo-academias', serviceKey: 'seo', nicheKey: 'academias', title: 'SEO e Google Maps para Academias e Studios', shortName: 'SEO para Academias' },
  { slug: 'criacao-sites-construcao', serviceKey: 'criacao-sites', nicheKey: 'construcao', title: 'Criação de Sites para Construtoras e Engenheiros', shortName: 'Site para Construtoras' },
  { slug: 'landing-pages-estetica', serviceKey: 'landing-pages', nicheKey: 'estetica', title: 'Landing Pages de Captura para Clínicas de Estética', shortName: 'Landing Pages para Estética' },
  { slug: 'criacao-sites-empresas-industriais', serviceKey: 'criacao-sites', nicheKey: 'empresas-industriais', title: 'Criação de Sites para Indústrias B2B', shortName: 'Site para Indústrias' },
  { slug: 'marketing-digital-transportadoras', serviceKey: 'marketing-digital', nicheKey: 'transportadoras', title: 'Marketing Digital e Tráfego para Transportadoras', shortName: 'Marketing para Transportadoras' },
  { slug: 'criacao-sites-concessionarias', serviceKey: 'criacao-sites', nicheKey: 'concessionarias', title: 'Criação de Sites e Portais para Concessionárias', shortName: 'Site para Concessionárias' }
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

  // 1. Títulos e Metas Únicos
  let title = combo.title;
  let shortName = combo.shortName;
  if (nich) {
    title = `${srv.name} ${nich.article} ${nich.name}`;
  }

  const metaTitle = `${title} em ${cityName} | Miranda Tech`;
  
  const metaDescription = nich
    ? `Precisa de ${srv.name.toLowerCase()} ${nich.article} seu negócio de ${nich.name.toLowerCase()} em ${cityName}? Fale com Guilherme Miranda, especialista há 26 anos. Solicite orçamento!`
    : `Desenvolvimento profissional de ${srv.name.toLowerCase()} em ${cityName} e região. Alta velocidade, SEO integrado e foco total em conversão. Fale com Guilherme Miranda!`;

  // 2. Introdução Dinâmica baseada em Spintax
  const introVariants = [
    `A busca por presença digital forte em **${cityName}** tem se tornado um fator decisivo para o crescimento empresarial. Sendo **${cityPhrase}**, a concorrência exige que empresas locais de destaque invistam em tecnologia sofisticada. É nesse cenário que o serviço de **${title}** se destaca como o pilar estratégico ideal para negócios que buscam autoridade e vendas orgânicas na internet.`,
    
    `No atual ambiente econômico de **${cityName}** (${cityRegion}), estabelecer um posicionamento digital premium é indispensável. Para empresas que desejam atrair novos clientes diariamente de forma recorrente, contar com uma infraestrutura profissional de **${title}** é a solução definitiva. Guilherme Miranda, com mais de 26 anos de experiência, lidera a criação de projetos corporativos sob medida para essa região.`,
    
    `Empresas de sucesso em **${cityName}** compreendem que a transformação digital não é mais opcional, mas a engrenagem principal de escala. Ao contratar serviços de **${title}**, você garante que seu negócio na **${cityRegion}** esteja na vitrine mais importante do mundo: a primeira página do Google, gerando leads qualificados no WhatsApp 24 horas por dia.`
  ];
  
  const introduction = selectVariant(city.slug, combo.slug, introVariants);

  // 3. Conteúdo Principal dinâmico citando dores do nicho
  let mainContent = '';
  if (nich) {
    const nichDores = [
      `Para profissionais e empresas de **${nich.name.toLowerCase()}** localizados em **${cityName}**, os métodos tradicionais de atração de clientes já não trazem a mesma eficiência do passado. Hoje, clientes que precisam de um ${nich.singularName.toLowerCase()} qualificado recorrem imediatamente ao buscador do Google. Um projeto de **${title}** focado nas necessidades específicas deste setor garante que sua reputação técnica seja refletida em uma página veloz, segura e altamente persuasiva, respeitando as normas éticas da profissão e se destacando na **${cityRegion}**.`,
      
      `O mercado de **${nich.name.toLowerCase()}** em **${cityName}** é altamente competitivo. Para se consolidar e captar contatos de alto ticket, sua empresa necessita de uma plataforma digital premium. Com a assessoria técnica de Guilherme Miranda, desenvolvemos soluções exclusivas de **${title}** estruturadas desde o primeiro minuto para carregar em menos de 1 segundo, atrair tráfego local qualificado através de SEO avançado e convencer o visitante através de depoimentos estratégicos e CTAs diretos para o WhatsApp.`,
      
      `Desenvolver um canal digital estruturado de **${title}** é a forma mais barata e lucrativa de escalar as operações de sua empresa de **${nich.name.toLowerCase()}** em **${cityName}**. Chega de depender de plataformas de terceiros ou agências amadoras de informática. Entregamos um sistema estático completo, livre de manutenções complexas ou lentidões desnecessárias, criando uma máquina automatizada de agendamentos e vendas para sua marca.`
    ];
    mainContent = selectVariant(city.slug, combo.slug, nichDores);
  } else {
    const srvDores = [
      `Investir em **${serviceName}** com foco na cidade de **${cityName}** é o método cientificamente mais eficaz para expandir sua operação sem inflar excessivamente o custo de marketing. Nossas soluções estáticas em Astro eliminam a complexidade de bancos de dados pesados e sistemas vulneráveis, garantindo que o seu negócio na **${cityRegion}** se posicione no topo dos resultados de pesquisa com nota máxima em Core Web Vitals e Lighthouse.`,
      
      `A agilidade e sofisticação técnica são os principais diferenciais dos nossos projetos de **${serviceName}** para empresas em **${cityName}**. Cada detalhe da arquitetura estática é meticulosamente construído para entregar usabilidade perfeita em celulares, integração instantânea com WhatsApp, carregamento ultraveloz e metadados SEO robustos para que sua marca seja encontrada por clientes prontos para comprar seus produtos ou serviços.`,
      
      `Se sua empresa em **${cityName}** necessita de suporte técnico avançado e inovação para crescer, Guilherme Miranda oferece uma bagagem única de 26 anos de TI aplicada a negócios. Unimos o melhor da tecnologia moderna à visão comercial estratégica para entregar projetos de **${serviceName}** que geram resultados concretos e retornos financeiros reais de forma previsível.`
    ];
    mainContent = selectVariant(city.slug, combo.slug, srvDores);
  }

  // 4. Benefícios do serviço aplicados localmente
  const benefits = nich
    ? [
        `Design exclusivo totalmente alinhado ao público de ${nich.name.toLowerCase()} em ${cityName}`,
        `Estrutura ultrarrápida (Lighthouse > 95) para evitar perda de pacientes/clientes no celular`,
        `Otimização local de SEO focada em buscas regionais na ${cityRegion}`,
        `Integração direta com WhatsApp comercial para agendamentos imediatos`,
        `Garantia técnica de 26 anos de experiência liderada por Guilherme Miranda`
      ]
    : [
        `Arquitetura estática em Astro de alta performance sem WordPress`,
        `Código limpo e otimizado para o Google atingir a primeira página em ${cityName}`,
        `Hospedagem premium de altíssimo uptime e e-mails corporativos integrados`,
        `Integrações e automações robustas com WhatsApp e ferramentas de vendas`,
        `Atendimento e assessoria comercial qualificada com Guilherme Miranda`
      ];

  // 5. FAQ dinâmico citando cidade e nicho
  const faqs = nich
    ? [
        {
          question: `Como funciona o serviço de ${title} em ${cityName}?`,
          answer: `Nosso serviço desenvolve uma plataforma corporativa exclusiva sob medida para profissionais de ${nich.name.toLowerCase()} em ${cityName}. Criamos um site estático focado em velocidade extrema e conversão direta via WhatsApp, estruturado de acordo com as regras éticas do seu segmento.`
        },
        {
          question: `Qual o prazo de entrega para projetos de ${shortName} na região?`,
          answer: `O prazo varia de acordo com a complexidade, mas a média é de 10 a 20 dias úteis. Projetos liderados por Guilherme Miranda contam com processos ágeis, assegurando a entrega de um sistema completo, testado e pronto para capturar leads.`
        },
        {
          question: `Por que as soluções da Miranda Tech são superiores para empresas de ${nich.name.toLowerCase()}?`,
          answer: `Diferente de templates comuns de WordPress, nós utilizamos Astro e arquitetura estática pura. Isso significa que seu site em ${cityName} será imune a vírus de segurança, extremamente veloz em redes móveis e carregará instantaneamente, o que dobra a taxa de contatos comerciais.`
        }
      ]
    : [
        {
          question: `Como o serviço de ${serviceName} vai ajudar minha empresa em ${cityName}?`,
          answer: `Ao implementar soluções de ${serviceName.toLowerCase()} de alta qualidade, sua marca ganha autoridade técnica na ${cityRegion}, melhora o ranqueamento orgânico no Google e oferece uma experiência de usuário rápida e intuitiva, convertendo mais visitantes locais em leads de vendas.`
        },
        {
          question: `Os projetos desenvolvidos contam com suporte pós-lançamento?`,
          answer: `Sim, absolutamente. Oferecemos pacotes integrados de suporte e manutenção web para garantir estabilidade contínua, backups sistemáticos e monitoramento de performance de todas as plataformas operando na região de ${cityName}.`
        },
        {
          question: `Guilherme Miranda atende empresas de grande porte em ${cityName}?`,
          answer: `Sim! Com 26 anos de bagagem em TI e mais de 1200 softwares vendidos, Guilherme Miranda possui vasta experiência em consultoria tecnológica para pequenas, médias e grandes multinacionais, entregando robustez e arquiteturas de alta resiliência.`
        }
      ];

  // 6. Chamada de Conversão Contextualizada
  const cta = nich
    ? `Olá Guilherme Miranda, gostaria de solicitar um orçamento para ${title} em ${cityName}. Vi a simulação na página de ${nich.name.toLowerCase()} e quero expandir nosso negócio digital.`
    : `Olá Guilherme Miranda, gostaria de mais informações sobre ${serviceName} em ${cityName}. Fiz uma simulação em seu canal oficial e gostaria de falar com um especialista.`;

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
