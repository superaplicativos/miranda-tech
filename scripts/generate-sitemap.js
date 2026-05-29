// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const SITE_URL = 'https://superaplicativos.github.io/miranda-tech';

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file === 'index.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function generateSitemap() {
  console.log('🤖 Iniciando geração do Sitemap customizado...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Erro: O diretório "dist" não existe. Rode "npm run build" primeiro.');
    process.exit(1);
  }
  
  const htmlFiles = getHtmlFiles(DIST_DIR);
  const urls = [];
  
  htmlFiles.forEach(file => {
    // Calcula o caminho relativo de dist/
    let relativePath = path.relative(DIST_DIR, file);
    
    // Substitui contra-barras por barras (compatibilidade Windows/Linux)
    relativePath = relativePath.replace(/\\/g, '/');
    
    // Remove "index.html" do final
    relativePath = relativePath.replace(/index\.html$/, '');
    
    // Assegura trailing slash
    if (relativePath && !relativePath.endsWith('/')) {
      relativePath += '/';
    }
    
    const absoluteUrl = `${SITE_URL}/${relativePath}`;
    urls.push(absoluteUrl);
  });
  
  console.log(`📝 Total de páginas mapeadas: ${urls.length}`);
  
  // Escrevendo o arquivo XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === SITE_URL + '/' ? '1.0' : url.includes('/posts/') ? '0.7' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  const sitemapIndexPath = path.join(DIST_DIR, 'sitemap-index.xml');
  
  fs.writeFileSync(sitemapPath, sitemapXml);
  fs.writeFileSync(sitemapIndexPath, sitemapXml); // Gera ambos para retrocompatibilidade
  
  console.log(`✅ Sitemap gerado com sucesso em: ${sitemapPath}`);
}

generateSitemap();
