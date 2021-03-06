import MyFavorites from '@/views/MyFavorites.vue';
export interface NewsArticle {
    id: number;
    title: string;
    content: string;
    dateString: string;
    baseImageName: string;
    articleType: ArticleType;
    isFavourite: boolean;
  }
  
  export enum ArticleType {
    TopStory = 'TOP_STORY',
    DevelopingStories = 'DEVELOPING_STORIES',
    
   
  }

  
// Store root state
export interface RootState {
    topToolbar: TopToolbarState;
  }
  
  // Store modules state
  export interface TopToolbarState {
    title: string;
  }