import * as Router from 'koa-router';
import User from '../modal/user';
import { hanldSuccess, hanldError } from '../config/handleUnsual';
export const getUerInfo = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        const name = ctx.cookies.get('u_user');
        const currentUser = await User.findOne({ username: name }, 
            ['username','avatorUrl','articleAmount','followers','views','signWord','signWord','backgroundUrl']);
        if (currentUser) {
            ctx.body = hanldSuccess(currentUser);
        }
    } catch (err) {
        ctx.body = hanldError();
    }
}