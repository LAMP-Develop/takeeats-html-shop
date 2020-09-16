const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");

(async () => {
  const files = await imagemin(["src/img/**/*.{jpg,png,svg}"], {
    destination: "dist/images/",
    plugins: [imageminSvgo(), imageminJpegtran(), imageminPngquant()],
  });
  console.log(files);
})();
