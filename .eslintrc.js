module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "globals": { // 脚本在执行期间访问的额外的全局变量
        "Component": true,
        "Page": true,
        "wx": true,
    },
    "rules": { // 启用的规则及其各自的错误级别。
        "indent": [ // 强制执行一致的缩进（4个空格）
            1,
            2
        ],
        "linebreak-style": [ // 强制执行一致的换行样式（'unix'）
            1,
            "unix"
        ],
        "quotes": [ // 强制一致使用反引号，双引号或单引号（反引号或单引号）
            1,
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [ // 要求或禁止使用分号代替 ASI (semi)
            1,
            "always"
        ],
        "no-console": [1, {
            allow: ["info", "warn", "error"]
        }], //  不建议使用console.log
        "no-undef": [2], // 禁用未声明的变量
    }
}