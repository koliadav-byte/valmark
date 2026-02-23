const fs = require('fs');
const path = require('path');

const ARTICLES_DIR = path.join(__dirname, '..', 'public', 'articles');
const OUT_FILE = path.join(__dirname, '..', 'public', 'articles.json');

function scan() {
  const categories = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const articles = [];

  for (const cat of categories) {
    const catDir = path.join(ARTICLES_DIR, cat);
    const items = fs.readdirSync(catDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name);

    for (const slug of items) {
      const artDir = path.join(catDir, slug);
      const pdfPath = path.join(artDir, 'article.pdf');
      const summaryPath = path.join(artDir, 'summary.md');
      const metaPath = path.join(artDir, 'metadata.json');

      if (!fs.existsSync(pdfPath)) continue; // ignore incomplete

      const stats = fs.statSync(pdfPath);
      const mtime = stats.mtime.toISOString();

      let title = slug.replace(/[-_]/g, ' ');
      let summary = '';
      let metadata = {};

      if (fs.existsSync(summaryPath)) {
        summary = fs.readFileSync(summaryPath, 'utf8').trim();
      }

      if (fs.existsSync(metaPath)) {
        try { metadata = JSON.parse(fs.readFileSync(metaPath, 'utf8')); } catch(e){}
        if (metadata.title) title = metadata.title;
      }

      articles.push({
        title,
        category: cat,
        slug,
        pdf: path.posix.join('/articles', cat, slug, 'article.pdf'),
        summary,
        metadata,
        date: metadata.date || mtime
      });
    }
  }

  // sort by date desc
  articles.sort((a,b) => new Date(b.date) - new Date(a.date));
  fs.writeFileSync(OUT_FILE, JSON.stringify(articles, null, 2), 'utf8');
  console.log('Wrote', OUT_FILE, 'with', articles.length, 'articles');
}

scan();
