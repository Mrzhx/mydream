import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";
export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    dialog.unmount(div);
    div.remove();
  };
  const dialog = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVal) => {
            if (newVal === false) {
              close();
            }
          },
          ok,
          cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });
  dialog.mount(div);
};
