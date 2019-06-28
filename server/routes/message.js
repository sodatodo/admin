const router = require('koa-router')()
const { } = require('../controller/message')
const { createMessage } = require('../controller/message')

router.prefix('/message')

function handleRes(ctx, next, res) {
    if (res.status === 0) {
        ctx.body = res
    } else {
        ctx.status = res.httpCode
        ctx.body = res
        // ctx.message = res.message   //本来想直接设置fetch的statusText，但是加了这句话请求就出错
    }
}

router.post('/create', async function (ctx, next) {
    const res = await createMessage(ctx.request.body)
    handleRes(ctx, next, res)
})





module.exports = router
