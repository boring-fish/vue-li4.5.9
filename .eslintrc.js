module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        // "Atomics": "readonly",
        // "SharedArrayBuffer": "readonly",
        "module":"readonly",
        "process":"readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    // 0 = off, 1 = warn, 2 = error
    "rules": {
        'generator-star-spacing': 'off',
        "no-extra-parens": 1, // 非必要的括号
        'space-before-function-paren':["off","always"],
        "no-use-before-define": "off",//未定义前不能使用
        "handle-callback-err": "off",
        "semi": "error", //结束是否加分号
        "no-empty":"off",
        'no-multi-spaces': 2,
　　　　 "no-irregular-whitespace":"off",//这禁止掉 空格报错检查
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'warn',
        'vue/no-unused-vars': 'off',
        'vue/require-v-for-key': 'off',
        'no-unused-vars': 'off',
        'vue/no-unused-components': 'off',
    }
};