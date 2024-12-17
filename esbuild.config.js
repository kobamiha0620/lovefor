const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/js/index.js'], 
  bundle: true,                     // バンドルするかどうか
  outdir: 'dist/js',                // 出力ディレクトリ
  sourcemap: true,                  // ソースマップを生成するかどうか
  minify: true,
}).catch(() => process.exit(1));