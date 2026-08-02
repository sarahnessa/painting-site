import axios from 'axios';

axios.get('https://graph.instagram.com/refresh_access_token', {
    params: {
        grant_type: 'ig_refresh_token',
        access_token: 'IGQVJVVGNodkU5ZAVlYSVdnVzlXTTRpUVhiUk9OMXNHR0cwNUtud1VwbW9WUF9ManVBU0xEcW0wZAEp0VUVpd094RndWV1RNQkFxR0FsRkhTb1JHVWZAZAUk8zd0lWdUMzRGtaTHhLeU5UZA19Sc0ZAiYUJMNQZDZD'
    }
})
.then(res => {
    const ACCESS_TOKEN = res.data.access_token;
    console.log(res.data.data);
});


