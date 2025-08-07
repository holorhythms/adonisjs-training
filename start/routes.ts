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
import app from '@adonisjs/core/services/app'
import * as fs from 'node:fs/promises'

router.on('/').render('pages/home').as('home')

router.get('/movies', async function (ctx: HttpContext) {
    return ctx.view.render('pages/movies/index')
}).as('movies.index')

router.get('/movies/:slug', async (ctx: HttpContext) => {
    const url: URL = app.makeURL(`resources/movies/${ctx.params.slug}.html`)
    const movie = await fs.readFile(url, 'utf8')

    return ctx.view.render('pages/movies/show',  { movie })
}).as('movies.show')

router.get('/movies/create', () => {}).as('movies.create')

router.post('/movies', () => {}).as('movies.store')

router.get('/movies/my-movie/edit', () => {}).as('movies.edit')

router.put('/movies/my-movie', () => {}).as('movies.update')

router.delete('/movies/my-movie', () => {}).as('movies.destroy')