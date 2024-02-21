// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/images-text/index.js
import "./component";
import "./preview";

Shopware.Service("cmsService").registerCmsBlock({
  name: "images-text",
  category: "text-image",
  label: "2 Images with text",
  component: "sw-cms-block-images-text",
  previewComponent: "sw-cms-preview-images-text",
  defaultConfig: {
    marginBottom: "20px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    sizingMode: "boxed",
  },
  slots: {
    text: {
      type: "text",
      default: {
        config: {
          content: { source: "static", value: "lorem ipsum" },
        },
      },
    },
    "primary-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
    "alt-image": {
      type: "image",
      default: {
        config: {
          displayMode: { source: "static", value: "cover" },
        },
      },
    },
  },
});
