

// import { uglify } from "rollup-plugin-uglify";
export default [
  {
    input: "lib/tab.js",
    output: {
      file: "tab.umd.js", // 导出文件
      format: "umd", // 打包文件支持的形式
      name: "tab",
    },
    plugins: [
      // uglify()
    ],
  }
];
