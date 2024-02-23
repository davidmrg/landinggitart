import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index'));

// router.get('*', (req, res) => res.send('404 | página no encontrada en el servidor'))

//esta ruta es de test para enviar datos desde el backend
// router.get('/about', (req, res) => res.render('about', {title: 'dato de backend de ejemplo: ', x: 50}));

export default router