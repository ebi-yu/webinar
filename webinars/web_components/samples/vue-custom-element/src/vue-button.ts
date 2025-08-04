import { defineCustomElement } from "vue";
import VueButton from "./VueButton.ce.vue";

// Vue ComponentをCustom Elementに変換
const VueButtonElement = defineCustomElement(VueButton);

// Custom Elementを登録
customElements.define("vue-button", VueButtonElement);

export { VueButtonElement };
