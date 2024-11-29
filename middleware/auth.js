export default defineNuxtRouteMiddleware(async (to, from) => {
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
