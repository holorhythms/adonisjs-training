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

router.on('/').render('pages/home').as('home')

router.get('/movies', async function (ctx: HttpContext) {
    return ctx.view.render('pages/movies')
}).as('movies.index')

router.get('/movies/my-movie', (ctx: HttpContext) => {
    ctx.view.share({ movie: "My awesome movie to share" })
    return ctx.view.render('pages/movies')
}).as('movies.show')

router.get('/movies/create', () => {}).as('movies.create')

router.post('/movies', () => {}).as('movies.store')

router.get('/movies/my-movie/edit', () => {}).as('movies.edit')

router.put('/movies/my-movie', () => {}).as('movies.update')

router.delete('/movies/my-movie', () => {}).as('movies.destroy')