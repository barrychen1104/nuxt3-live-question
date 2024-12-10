import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("bootstrap", {
    Offcanvas: (element, options) => new bootstrap.Offcanvas(element, options),
    Modal: (element, options) => new bootstrap.Modal(element, options),
  });
});
