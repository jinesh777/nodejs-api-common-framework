const fs = require('fs');
const AWS = require('aws-sdk');
var multer = require('multer');

//s3 credentials
const s3 = new AWS.S3({
	accessKeyId: '<key>',
	secretAccessKey: '<secret>',
	region: '<region>'
});

var ImageKit = require('imagekit');

var imagekit = new ImageKit({
	publicKey: '<imagekit key>',
	privateKey: '<imagekit publicKey>',
	urlEndpoint: '<end point>'
});

const s3Service = () => {
  const uploadFile = async (req, res) => {
    const { folderName } = req.body;

    if (!req.files || !folderName) {
      return res.status(422).json({
        status: 'fail',
        message: 'No file or folder name',
      });
    }

    let files = [];
    let result = [];
    if (Array.isArray(req.files.images)) {
      files = req.files.images;
    } else {
      files.push(req.files.images);
    }

    files.forEach((file) => {
      let newFileName = `${Date.now()}.${file['name'].split('.').pop()}`;

      if (!file.mimetype.startsWith('image')) {
        return res.status(422).json({
          status: 'fail',
          message: 'Upload only image type',
        });
      }

      const uploadedImage = imagekit.upload({
        file: file['data'], //required
			fileName: newFileName, //required
        folder: folderName,
      });
	  
      result.push(uploadedImage);
    });

    return Promise.all(result);
	};
	return {
		uploadFile
	};
};
module.exports = s3Service;
