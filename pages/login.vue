<script setup>
const { $swal } = useNuxtApp();

// 表單格式
const userLoginObject = ref({
  email: "",
  password: "",
});

const isLogging = ref(false);

const loginAccount = async () => {
  /*
  1. 串接旅館的 登入 API
  2. 登入成功後，使用 useCookie() 將 token 寫入名稱為 “auth” 的 cookie
  3. 需使用 try catch 處理請求
  4. 請求成功與失敗皆使用 sweetAlert2 套件顯示訊息
 $swal.fire({
   position: "center",
   icon: ...,
   title: ...,
   showConfirmButton: false,
   timer: 1500,
 });
  */
  isLogging.value = true;
  try {
    const response = await $fetch("/v1/user/login", {
      baseURL: "https://nuxr3.zeabur.app/api",
      method: "POST",
      body: {
        ...userLoginObject.value,
      },
    });
    await $swal.fire({
      position: "center",
      icon: "success",
      title: "登入成功",
      showConfirmButton: false,
      timer: 1500,
    });

    const cookie = useCookie("auth", {
      maxAge: 600,
      path: "/",
    });
    cookie.value = response.token;

    const getUserCookie = useCookie("auth");
    console.log(getUserCookie.value);
  } catch (error) {
    const { message } = error.response._data;
    $swal.fire({
      position: "center",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  isLogging.value = false;
};
</script>

<template>
  <div class="py-3 py-md-5 vh-100">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="h3 mb-4">登入</h2>
          <form @submit.prevent="loginAccount(userLoginObject)">
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="example@gmail.com"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
                v-model="userLoginObject.email"
              />
              <label for="email">信箱 <span class="text-danger">*</span></label>
            </div>

            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="請輸入 8 碼以上密碼"
                pattern=".{8,}"
                required
                v-model="userLoginObject.password"
              />
              <label for="password"
                >密碼 <span class="text-danger">*</span></label
              >
            </div>
            <button
              class="btn btn-lg btn-primary w-100"
              type="submit"
              :disabled="isLogging"
            >
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
