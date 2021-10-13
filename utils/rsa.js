const fs = require('fs');
const path = require('path');

const NodeRSA = require('node-rsa');

/** @description : Generate new 512bit-length public and private keys
 *  @params : null
 *  @returns : publicKey, privateKey
 */
const generateKeyPair = () => {
  /** Generate new 512bit-length key */
  const key = new NodeRSA({
    b: 512
  });

  return {
    publicKey: key.exportKey('public'),
    privateKey: key.exportKey('private')
  };
};

/** @description : Path varaibles to Private key and Public Key */
const pathToCert = path.join(__dirname, '../config', 'certificate');

const pathToPrivateKeyTxt = path.join(pathToCert, 'private_key.pem');
const pathToPublicKeyTxt = path.join(pathToCert, 'public_key.pem');

/** @description : Generates new 512bit-length public and private keys and saved to Certitficate files(private_key.txt,public_key.txt)
 *  @params : null
 *  @returns : boolean
 */
const saveNewKeysToCert = () => {
  const keys = generateKeyPair();

  fs.writeFileSync(pathToPublicKeyTxt, keys.publicKey);
  fs.writeFileSync(pathToPrivateKeyTxt, keys.privateKey);

  return true;
};

/** @description : Returns Private Key from Cerfiticate directory(private_key.txt)
 *  @params : encoding?:
 *  @returns : string | buffer | url | integer
 */
const getPrivateKeyFromCert = (encoding = 'utf8') => {
  return fs.readFileSync(pathToPrivateKeyTxt, {
    encoding
  });
};

/** @description : Returns Public Key from Cerfiticate directory(public_key.txt)
 *  @params : encoding?:
 *  @returns : string | buffer | url | integer
 */
const getPublicKeyFromCert = (encoding = 'utf8') => {
  return fs.readFileSync(pathToPublicKeyTxt, {
    encoding
  });
};

/** @description : Encrypts the data with the given public key and the default key is root cert directory
   * 
   *  @params : 
   * data: Data to encrypt = string | buffer | object/array
   * key: Public key to encrypt the given data 
   * encoding: encoding for output result
   'buffer', 'binary', 'hex' or 'base64'. Default 'buffer'.
  
   *  @returns : string | buffer | url | integer
   */
const publicEncrypt = (
  data,
  key = getPublicKeyFromCert(),
  encoding = 'base64'
) => {
  return new NodeRSA(key).encrypt(data, encoding);
};

/** @description : Decrypts the data with the given private key and the default key is root cert directory
   * 
   *  @params : 
   * data: Data to decrypt 
   * key: Public key to encrypt the given data 
   * encoding: decoding for output result
   'buffer', 'binary', 'hex' or 'base64'. Default 'utf8'.
   
   *  @returns : string | buffer | url | integer
   */

const privateDecrypt = (
  encryptedData,
  key = getPrivateKeyFromCert(),
  encoding = 'utf8'
) => {
  return new NodeRSA(key).decrypt(encryptedData, encoding);
};

module.exports = {
    publicEncrypt,
    privateDecrypt
}