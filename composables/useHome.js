import axios from "axios";

export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  // API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
  // 使用 ES6 fetch() 或是 axios.get() 串接 API
  // 切換 isLoading 狀態
  const fetchNews = async () => {
    isLoading.value = true;

    try {
      const { data } = await axios.get(
        "https://nuxr3.zeabur.app/api/v1/home/news/"
      );
      newsList.value = data?.result;
    } catch (error) {
      console.error("獲取新聞失敗:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    newsList,
    isLoading,
    fetchNews,
  };
};
