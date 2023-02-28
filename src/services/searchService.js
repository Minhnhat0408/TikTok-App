import * as httpRequest from '~/utils/httpRequests';

export const search  = async (q,type ='less') => {
    try {
        const response = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return response.data
    } catch(err) {
        console.log(err)
    }
};