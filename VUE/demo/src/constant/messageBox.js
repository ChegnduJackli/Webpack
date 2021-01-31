
import Vue from 'vue'
import { 
    Message
  } from 'element-ui'


const messageBox = {

    success(msg) { 
        Message({
            type: 'success',
            message: msg
        });
    },
    error(msg) { },
    info(msg) { },
    warn(msg) { },
}
export default messageBox