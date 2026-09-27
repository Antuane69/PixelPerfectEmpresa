import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
    const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller980bb49ee7ae63891f1d891d2fbcf1c9.form = Controller980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pixel-perfect-empresarial'
 */
const Controllerba9351e4e66a1303a3b545b1e15a17a9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerba9351e4e66a1303a3b545b1e15a17a9.url(options),
    method: 'get',
})

Controllerba9351e4e66a1303a3b545b1e15a17a9.definition = {
    methods: ["get","head"],
    url: '/pixel-perfect-empresarial',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pixel-perfect-empresarial'
 */
Controllerba9351e4e66a1303a3b545b1e15a17a9.url = (options?: RouteQueryOptions) => {
    return Controllerba9351e4e66a1303a3b545b1e15a17a9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pixel-perfect-empresarial'
 */
Controllerba9351e4e66a1303a3b545b1e15a17a9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerba9351e4e66a1303a3b545b1e15a17a9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pixel-perfect-empresarial'
 */
Controllerba9351e4e66a1303a3b545b1e15a17a9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerba9351e4e66a1303a3b545b1e15a17a9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pixel-perfect-empresarial'
 */
    const Controllerba9351e4e66a1303a3b545b1e15a17a9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerba9351e4e66a1303a3b545b1e15a17a9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pixel-perfect-empresarial'
 */
        Controllerba9351e4e66a1303a3b545b1e15a17a9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerba9351e4e66a1303a3b545b1e15a17a9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pixel-perfect-empresarial'
 */
        Controllerba9351e4e66a1303a3b545b1e15a17a9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerba9351e4e66a1303a3b545b1e15a17a9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerba9351e4e66a1303a3b545b1e15a17a9.form = Controllerba9351e4e66a1303a3b545b1e15a17a9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/plantillas'
 */
const Controllerad1f48b29d0b5f449526556e9de1b39e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerad1f48b29d0b5f449526556e9de1b39e.url(options),
    method: 'get',
})

Controllerad1f48b29d0b5f449526556e9de1b39e.definition = {
    methods: ["get","head"],
    url: '/plantillas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/plantillas'
 */
Controllerad1f48b29d0b5f449526556e9de1b39e.url = (options?: RouteQueryOptions) => {
    return Controllerad1f48b29d0b5f449526556e9de1b39e.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/plantillas'
 */
Controllerad1f48b29d0b5f449526556e9de1b39e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerad1f48b29d0b5f449526556e9de1b39e.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/plantillas'
 */
Controllerad1f48b29d0b5f449526556e9de1b39e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerad1f48b29d0b5f449526556e9de1b39e.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/plantillas'
 */
    const Controllerad1f48b29d0b5f449526556e9de1b39eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerad1f48b29d0b5f449526556e9de1b39e.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/plantillas'
 */
        Controllerad1f48b29d0b5f449526556e9de1b39eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerad1f48b29d0b5f449526556e9de1b39e.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/plantillas'
 */
        Controllerad1f48b29d0b5f449526556e9de1b39eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerad1f48b29d0b5f449526556e9de1b39e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerad1f48b29d0b5f449526556e9de1b39e.form = Controllerad1f48b29d0b5f449526556e9de1b39eForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante'
 */
const Controller20e96a7971286aeb1866c5d6724dd331 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller20e96a7971286aeb1866c5d6724dd331.url(options),
    method: 'get',
})

Controller20e96a7971286aeb1866c5d6724dd331.definition = {
    methods: ["get","head"],
    url: '/demos/restaurante',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante'
 */
Controller20e96a7971286aeb1866c5d6724dd331.url = (options?: RouteQueryOptions) => {
    return Controller20e96a7971286aeb1866c5d6724dd331.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante'
 */
Controller20e96a7971286aeb1866c5d6724dd331.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller20e96a7971286aeb1866c5d6724dd331.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante'
 */
Controller20e96a7971286aeb1866c5d6724dd331.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller20e96a7971286aeb1866c5d6724dd331.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante'
 */
    const Controller20e96a7971286aeb1866c5d6724dd331Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller20e96a7971286aeb1866c5d6724dd331.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante'
 */
        Controller20e96a7971286aeb1866c5d6724dd331Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller20e96a7971286aeb1866c5d6724dd331.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante'
 */
        Controller20e96a7971286aeb1866c5d6724dd331Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller20e96a7971286aeb1866c5d6724dd331.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller20e96a7971286aeb1866c5d6724dd331.form = Controller20e96a7971286aeb1866c5d6724dd331Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/menu'
 */
const Controllere9b8896375c037b92768483cbaad55f7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere9b8896375c037b92768483cbaad55f7.url(options),
    method: 'get',
})

Controllere9b8896375c037b92768483cbaad55f7.definition = {
    methods: ["get","head"],
    url: '/demos/restaurante/menu',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/menu'
 */
Controllere9b8896375c037b92768483cbaad55f7.url = (options?: RouteQueryOptions) => {
    return Controllere9b8896375c037b92768483cbaad55f7.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/menu'
 */
Controllere9b8896375c037b92768483cbaad55f7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere9b8896375c037b92768483cbaad55f7.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/menu'
 */
Controllere9b8896375c037b92768483cbaad55f7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere9b8896375c037b92768483cbaad55f7.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/menu'
 */
    const Controllere9b8896375c037b92768483cbaad55f7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere9b8896375c037b92768483cbaad55f7.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/menu'
 */
        Controllere9b8896375c037b92768483cbaad55f7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere9b8896375c037b92768483cbaad55f7.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/menu'
 */
        Controllere9b8896375c037b92768483cbaad55f7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere9b8896375c037b92768483cbaad55f7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere9b8896375c037b92768483cbaad55f7.form = Controllere9b8896375c037b92768483cbaad55f7Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/galeria'
 */
const Controllerb7b5064e6a1f5366f1999b67a3562da6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerb7b5064e6a1f5366f1999b67a3562da6.url(options),
    method: 'get',
})

Controllerb7b5064e6a1f5366f1999b67a3562da6.definition = {
    methods: ["get","head"],
    url: '/demos/restaurante/galeria',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/galeria'
 */
Controllerb7b5064e6a1f5366f1999b67a3562da6.url = (options?: RouteQueryOptions) => {
    return Controllerb7b5064e6a1f5366f1999b67a3562da6.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/galeria'
 */
Controllerb7b5064e6a1f5366f1999b67a3562da6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerb7b5064e6a1f5366f1999b67a3562da6.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/galeria'
 */
Controllerb7b5064e6a1f5366f1999b67a3562da6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerb7b5064e6a1f5366f1999b67a3562da6.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/galeria'
 */
    const Controllerb7b5064e6a1f5366f1999b67a3562da6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerb7b5064e6a1f5366f1999b67a3562da6.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/galeria'
 */
        Controllerb7b5064e6a1f5366f1999b67a3562da6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerb7b5064e6a1f5366f1999b67a3562da6.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/demos/restaurante/galeria'
 */
        Controllerb7b5064e6a1f5366f1999b67a3562da6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerb7b5064e6a1f5366f1999b67a3562da6.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerb7b5064e6a1f5366f1999b67a3562da6.form = Controllerb7b5064e6a1f5366f1999b67a3562da6Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en'
 */
const Controller9e261e73ad75509ce2b98cedb3bdf39f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller9e261e73ad75509ce2b98cedb3bdf39f.url(options),
    method: 'get',
})

Controller9e261e73ad75509ce2b98cedb3bdf39f.definition = {
    methods: ["get","head"],
    url: '/en',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en'
 */
Controller9e261e73ad75509ce2b98cedb3bdf39f.url = (options?: RouteQueryOptions) => {
    return Controller9e261e73ad75509ce2b98cedb3bdf39f.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en'
 */
Controller9e261e73ad75509ce2b98cedb3bdf39f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller9e261e73ad75509ce2b98cedb3bdf39f.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en'
 */
Controller9e261e73ad75509ce2b98cedb3bdf39f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller9e261e73ad75509ce2b98cedb3bdf39f.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en'
 */
    const Controller9e261e73ad75509ce2b98cedb3bdf39fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller9e261e73ad75509ce2b98cedb3bdf39f.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en'
 */
        Controller9e261e73ad75509ce2b98cedb3bdf39fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller9e261e73ad75509ce2b98cedb3bdf39f.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en'
 */
        Controller9e261e73ad75509ce2b98cedb3bdf39fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller9e261e73ad75509ce2b98cedb3bdf39f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller9e261e73ad75509ce2b98cedb3bdf39f.form = Controller9e261e73ad75509ce2b98cedb3bdf39fForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/pixel-perfect-empresarial'
 */
const Controllerba9616870c0f2e7350dfe3600e3d24e7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerba9616870c0f2e7350dfe3600e3d24e7.url(options),
    method: 'get',
})

Controllerba9616870c0f2e7350dfe3600e3d24e7.definition = {
    methods: ["get","head"],
    url: '/en/pixel-perfect-empresarial',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/pixel-perfect-empresarial'
 */
Controllerba9616870c0f2e7350dfe3600e3d24e7.url = (options?: RouteQueryOptions) => {
    return Controllerba9616870c0f2e7350dfe3600e3d24e7.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/pixel-perfect-empresarial'
 */
Controllerba9616870c0f2e7350dfe3600e3d24e7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerba9616870c0f2e7350dfe3600e3d24e7.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/pixel-perfect-empresarial'
 */
Controllerba9616870c0f2e7350dfe3600e3d24e7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerba9616870c0f2e7350dfe3600e3d24e7.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/pixel-perfect-empresarial'
 */
    const Controllerba9616870c0f2e7350dfe3600e3d24e7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerba9616870c0f2e7350dfe3600e3d24e7.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/pixel-perfect-empresarial'
 */
        Controllerba9616870c0f2e7350dfe3600e3d24e7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerba9616870c0f2e7350dfe3600e3d24e7.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/pixel-perfect-empresarial'
 */
        Controllerba9616870c0f2e7350dfe3600e3d24e7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerba9616870c0f2e7350dfe3600e3d24e7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerba9616870c0f2e7350dfe3600e3d24e7.form = Controllerba9616870c0f2e7350dfe3600e3d24e7Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/plantillas'
 */
const Controllera0b136b0c2d3f50128a45a7d91e07d5f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera0b136b0c2d3f50128a45a7d91e07d5f.url(options),
    method: 'get',
})

Controllera0b136b0c2d3f50128a45a7d91e07d5f.definition = {
    methods: ["get","head"],
    url: '/en/plantillas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/plantillas'
 */
Controllera0b136b0c2d3f50128a45a7d91e07d5f.url = (options?: RouteQueryOptions) => {
    return Controllera0b136b0c2d3f50128a45a7d91e07d5f.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/plantillas'
 */
Controllera0b136b0c2d3f50128a45a7d91e07d5f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera0b136b0c2d3f50128a45a7d91e07d5f.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/plantillas'
 */
Controllera0b136b0c2d3f50128a45a7d91e07d5f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllera0b136b0c2d3f50128a45a7d91e07d5f.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/plantillas'
 */
    const Controllera0b136b0c2d3f50128a45a7d91e07d5fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllera0b136b0c2d3f50128a45a7d91e07d5f.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/plantillas'
 */
        Controllera0b136b0c2d3f50128a45a7d91e07d5fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera0b136b0c2d3f50128a45a7d91e07d5f.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/plantillas'
 */
        Controllera0b136b0c2d3f50128a45a7d91e07d5fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera0b136b0c2d3f50128a45a7d91e07d5f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllera0b136b0c2d3f50128a45a7d91e07d5f.form = Controllera0b136b0c2d3f50128a45a7d91e07d5fForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante'
 */
const Controller29a0846da03d438bddaf728a07346e9c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller29a0846da03d438bddaf728a07346e9c.url(options),
    method: 'get',
})

Controller29a0846da03d438bddaf728a07346e9c.definition = {
    methods: ["get","head"],
    url: '/en/demos/restaurante',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante'
 */
Controller29a0846da03d438bddaf728a07346e9c.url = (options?: RouteQueryOptions) => {
    return Controller29a0846da03d438bddaf728a07346e9c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante'
 */
Controller29a0846da03d438bddaf728a07346e9c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller29a0846da03d438bddaf728a07346e9c.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante'
 */
Controller29a0846da03d438bddaf728a07346e9c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller29a0846da03d438bddaf728a07346e9c.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante'
 */
    const Controller29a0846da03d438bddaf728a07346e9cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller29a0846da03d438bddaf728a07346e9c.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante'
 */
        Controller29a0846da03d438bddaf728a07346e9cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller29a0846da03d438bddaf728a07346e9c.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante'
 */
        Controller29a0846da03d438bddaf728a07346e9cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller29a0846da03d438bddaf728a07346e9c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller29a0846da03d438bddaf728a07346e9c.form = Controller29a0846da03d438bddaf728a07346e9cForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/menu'
 */
const Controller3a269ccc4d139601b7cfa513d40b6f4c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3a269ccc4d139601b7cfa513d40b6f4c.url(options),
    method: 'get',
})

Controller3a269ccc4d139601b7cfa513d40b6f4c.definition = {
    methods: ["get","head"],
    url: '/en/demos/restaurante/menu',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/menu'
 */
Controller3a269ccc4d139601b7cfa513d40b6f4c.url = (options?: RouteQueryOptions) => {
    return Controller3a269ccc4d139601b7cfa513d40b6f4c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/menu'
 */
Controller3a269ccc4d139601b7cfa513d40b6f4c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3a269ccc4d139601b7cfa513d40b6f4c.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/menu'
 */
Controller3a269ccc4d139601b7cfa513d40b6f4c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller3a269ccc4d139601b7cfa513d40b6f4c.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/menu'
 */
    const Controller3a269ccc4d139601b7cfa513d40b6f4cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller3a269ccc4d139601b7cfa513d40b6f4c.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/menu'
 */
        Controller3a269ccc4d139601b7cfa513d40b6f4cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller3a269ccc4d139601b7cfa513d40b6f4c.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/menu'
 */
        Controller3a269ccc4d139601b7cfa513d40b6f4cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller3a269ccc4d139601b7cfa513d40b6f4c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller3a269ccc4d139601b7cfa513d40b6f4c.form = Controller3a269ccc4d139601b7cfa513d40b6f4cForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/galeria'
 */
const Controller5ef727833dad956f295d1db6ca8ff13d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller5ef727833dad956f295d1db6ca8ff13d.url(options),
    method: 'get',
})

Controller5ef727833dad956f295d1db6ca8ff13d.definition = {
    methods: ["get","head"],
    url: '/en/demos/restaurante/galeria',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/galeria'
 */
Controller5ef727833dad956f295d1db6ca8ff13d.url = (options?: RouteQueryOptions) => {
    return Controller5ef727833dad956f295d1db6ca8ff13d.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/galeria'
 */
Controller5ef727833dad956f295d1db6ca8ff13d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller5ef727833dad956f295d1db6ca8ff13d.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/galeria'
 */
Controller5ef727833dad956f295d1db6ca8ff13d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller5ef727833dad956f295d1db6ca8ff13d.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/galeria'
 */
    const Controller5ef727833dad956f295d1db6ca8ff13dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller5ef727833dad956f295d1db6ca8ff13d.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/galeria'
 */
        Controller5ef727833dad956f295d1db6ca8ff13dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller5ef727833dad956f295d1db6ca8ff13d.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/en/demos/restaurante/galeria'
 */
        Controller5ef727833dad956f295d1db6ca8ff13dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller5ef727833dad956f295d1db6ca8ff13d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller5ef727833dad956f295d1db6ca8ff13d.form = Controller5ef727833dad956f295d1db6ca8ff13dForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
const Controller42a740574ecbfbac32f8cc353fc32db9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

Controller42a740574ecbfbac32f8cc353fc32db9.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.url = (options?: RouteQueryOptions) => {
    return Controller42a740574ecbfbac32f8cc353fc32db9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
    const Controller42a740574ecbfbac32f8cc353fc32db9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
        Controller42a740574ecbfbac32f8cc353fc32db9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
        Controller42a740574ecbfbac32f8cc353fc32db9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller42a740574ecbfbac32f8cc353fc32db9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller42a740574ecbfbac32f8cc353fc32db9.form = Controller42a740574ecbfbac32f8cc353fc32db9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
    const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

/**
* Multiple routes resolve to \Inertia\Controller::Controller, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `Controller['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/pixel-perfect-empresarial': Controllerba9351e4e66a1303a3b545b1e15a17a9,
    '/plantillas': Controllerad1f48b29d0b5f449526556e9de1b39e,
    '/demos/restaurante': Controller20e96a7971286aeb1866c5d6724dd331,
    '/demos/restaurante/menu': Controllere9b8896375c037b92768483cbaad55f7,
    '/demos/restaurante/galeria': Controllerb7b5064e6a1f5366f1999b67a3562da6,
    '/en': Controller9e261e73ad75509ce2b98cedb3bdf39f,
    '/en/pixel-perfect-empresarial': Controllerba9616870c0f2e7350dfe3600e3d24e7,
    '/en/plantillas': Controllera0b136b0c2d3f50128a45a7d91e07d5f,
    '/en/demos/restaurante': Controller29a0846da03d438bddaf728a07346e9c,
    '/en/demos/restaurante/menu': Controller3a269ccc4d139601b7cfa513d40b6f4c,
    '/en/demos/restaurante/galeria': Controller5ef727833dad956f295d1db6ca8ff13d,
    '/dashboard': Controller42a740574ecbfbac32f8cc353fc32db9,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller