
import md5 from 'js-md5';
import CryptoJS from 'crypto-js';
//import OrgChart from '../utils/orgchart.js';

class CommonFunc {

    newGuid () {
        function s4 () {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    uuid () {
        return uuidv4();
    }
    signature (config) {
        let signature = '';
        let signToStr = '';
        try {
            let param = '';
            param = config.url.split('?')[1];
            param = !!param ? param : '';
            if (config.method.toLowerCase() != 'get') {
                param = param + md5(JSON.stringify(!!config.data ? config.data : {}));
            }
            console.log('config.data', JSON.stringify(config.data));
            debugger;
            param = config.method.toLowerCase() + '/' + param;
            const uuid = this.newGuid(); //防重放，//5分钟内，id不能重复
            const key = 'apikey20210901';
            const token = 'TTMP20210901'; //加密token,
            const timeSpan = Date.parse(new Date()); //5分钟内有效

            signToStr = `param=${param}&uuid=${uuid}&timeSpan=${timeSpan}&key=${key}`;
            // console.log(signToStr);
            signature = `sign=${CryptoJS.HmacSHA256(signToStr, token).toString()}&uuid=${uuid}&timeSpan=${timeSpan}&key=${key}`;
            console.log('signature', signature);
        } catch (e) {
            console.log(e);
        }
        return signature;
    }
    pcode (list) {
        const lStr = JSON.stringify(list);
        const token = 'apex-backend';
        return CryptoJS.HmacSHA256(lStr, token).toString();
    }
    // 另一种rsa公钥加载加密实现
    async getRsaEncode (key, msg) {
        const pem = '-----BEGIN PUBLIC KEY-----\n' + key + '\n-----END PUBLIC KEY-----';
        const keyObj = new keyutils.Key('pem', pem);
        let jwk;
        if (!keyObj.isEncrypted) {
            jwk = await keyObj.export('jwk');
        }
        return new Promise((resolve, reject) => {
            try {
                rsa.encrypt(
                    msg,
                    jwk,
                    'SHA-256', // optional, for OAEP. default is 'SHA-256'
                ).then((encrypted) => {
                    resolve(encrypted);
                })
            } catch (ex) {
                reject();
            }
        });
    }

}

export const secure = new CommonFunc();