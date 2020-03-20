import { ArticleType, NewsArticle } from '../types';

const url = '/data/articles.json';

class NewsService {
  [x: string]: any;
  getFavorites() {
    throw new Error("Method not implemented.");
  }

  getArticlesByType(articleType: ArticleType): Promise<NewsArticle[]> {

    return fetch('/data/articles.json')
      .then((response) => {
        return response.json();
      })
      .then((serverArticles) => {

        const newsArticles = serverArticles
          .filter((serverArticle: any) => serverArticle.articleType === articleType)
          .map((serverArticle: any) => {
            return {
              id: serverArticle.id,
              title: serverArticle.title,
              content: serverArticle.content,
              dateString: serverArticle.dateString,
              baseImageName: serverArticle.baseImageName,
              articleType: serverArticle.articleType,
              isFavourite: serverArticle.isFavourite
            } as NewsArticle;
          });

        return newsArticles;
      });
  }
}

export default new NewsService();