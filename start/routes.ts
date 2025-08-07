/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'

router.on('/').render('pages/home')

router.get('/movies', async function (ctx: HttpContext) {

    ctx.view.share({ movie: "My awesome move to share" })
    return ctx.view.render('pages/movies')
})