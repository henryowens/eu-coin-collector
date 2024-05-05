module.exports = {
  plugins: ["tailwindcss"],
  rules: {
    "tailwindcss/classnames-order": "off",
    "tailwindcss/no-custom-classname": "off",
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/block-tag-newline": [
      "warn",
      {
        singleline: "always",
      },
    ],
    "vue/eqeqeq": ["warn"],
    "vue/html-closing-bracket-newline": ["warn"],
    "vue/html-indent": [
      "warn",
      2,
      {
        alignAttributesVertically: false,
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        ignores: ["VAttribute", "VExpressionContainer"],
      },
    ],
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          // prettier adds self closing tags for void elements
          component: "always",
          normal: "always",
          void: "always",
        },
      },
    ],
    "vue/match-component-file-name": [
      "error",
      {
        extensions: ["vue"],
        shouldMatchCase: true,
      },
    ],
    "vue/multi-word-component-names": ["off"],
    "vue/no-multiple-template-root": "off",
    "vue/no-empty-component-block": ["warn"],
    "vue/no-required-prop-with-default": ["warn"],
    "vue/no-setup-props-destructure": ["error"],
    "vue/no-template-target-blank": ["warn"],
    "vue/no-unused-refs": ["warn"],
    "vue/no-useless-v-bind": ["warn"],
    "vue/no-v-html": 0,
    "vue/padding-line-between-blocks": ["warn"],
    "vue/prefer-template": ["warn"],
    "vue/prefer-true-attribute-shorthand": ["warn", "never"],
    "vue/require-macro-variable-name": [
      "warn",
      {
        defineEmits: "emit",
        defineProps: "props",
        defineSlots: "slots",
        useAttrs: "attrs",
        useSlots: "slots",
      },
    ],
    "vue/prefer-separate-static-class": ["warn"],
    "vue/no-static-inline-styles": ["warn"],
  },
};
