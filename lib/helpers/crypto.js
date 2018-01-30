const config = require('../../config/index'),
	CryptoJS = require('crypto-js');

function encrypt(text){
	return CryptoJS.AES.encrypt(text, config.phoneSecretKey);
}

function decrypt(text){
	var bytes  = CryptoJS.AES.decrypt(text.toString(), config.phoneSecretKey);

	return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = {
	encrypt: encrypt,
	decrypt: decrypt
};
