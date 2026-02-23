Руководство по публикации статей

Структура: public/articles/<category>/<slug>/

Правила публикации (простая опция):
- Положите PDF в папку публикации, например: `article.pdf`
- Добавьте краткую управленческую выжимку в `summary.md` (максимум 200–300 слов)
- Название папки публикации (`slug`) используется как идентификатор и часть пути к PDF

Автоматизация:
- Скрипт `scripts/generate-articles.js` собирает все PDF и `summary.md` и генерирует `public/articles.json`.
- Архив можно подтягивать из `public/articles.json` (отсортирован по времени файла PDF — новейшие первые).

Пример структуры публикации:
public/articles/macro-view/climate-risk/
  - article.pdf
  - summary.md
  - metadata.json (опционально)

Если нужно, могу обновить компонент `Archive.tsx` чтобы читать `public/articles.json` и отображать список автоматически.