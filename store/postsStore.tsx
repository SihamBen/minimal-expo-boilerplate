import { create } from 'zustand';
import { getPosts } from '../api/get-posts';
interface PostState {
  posts: any[];
  actions: {
    fetchPosts: () => Promise<any>;
  };
}
const usePostStore = create<PostState>((set) => ({
  posts: [],
  actions: {
    fetchPosts: async () => {
      const response = await getPosts();
      set({ posts: response });
    },
  },
}));
export const usePosts = () => usePostStore((state) => state.posts);
export const usePostActions = () => usePostStore((state) => state.actions);
