import router from '../router';
router.get('/66',async(ctx,next)=>{
    console.log('heihei')
    ctx.body = 'Hello World';
})