// // middleware/fileUpload.js

// import multer from "multer";
// import path from "path";

// // ========= banner images ========
// const bannerStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../public"));
//   },
//   filename: function (req, file, cb) {
//     const name = Date.now() + "-" + file.originalname;
//     cb(null, name);
//   },
// });

// const bannerUpload = multer({ storage: bannerStorage });

// export default { bannerUpload }; // Export as an object with bannerUpload property
