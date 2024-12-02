export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isHydrating, payload } = useNuxtApp();
  // 是否在客戶端、是否正在將伺服器端渲染的程式碼轉換成客戶端的、伺服器端是否以渲染過 HTML
  if (import.meta.client && isHydrating && payload.serverRendered) {
    return; // 阻止 $fetch 在客戶端再戳 API
  }

  const token = useCookie("auth");
  if (!token) {
    return navigateTo("/login");
  }

  try {
    const response = await $fetch(
      "https://nuxr3.zeabur.app/api/v1/user/check",
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    if (!response.status) {
      return navigateTo("/login");
    }
  } catch (e) {
    console.error(e);
    return navigateTo("/login");
  }
});
