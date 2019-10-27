import {getStore} from "../../service/getStoreData"
export default {
   getUserId({commit,state}){
       var userId = getStore("userId");
       console.log(userId);
       commit('SAVE_USERID',userId);
   }
}