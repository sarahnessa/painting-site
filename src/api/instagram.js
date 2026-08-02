import axios from 'axios';

export const ACCESS_TOKEN = 'IGQVJYTEg4T2xtQm1ORFYxMjVUV1lPWml3RUlwX01HR0hfZA1NnOE85RnZAtMjhKRzNQQXhQcnZArblJzQmVwZA01TMUZAlUVM0VnFuTi1YQW1UeUFEMUpqODRSdEs1VDlLYzU4YlcwTE9Da2RZAc0dPbmhmdgZDZD';

export const instagram = axios.create({
    baseURL: 'https://graph.instagram.com/me/',
    params: {
      access_token: ACCESS_TOKEN
    }
});






