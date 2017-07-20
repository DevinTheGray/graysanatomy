
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('muscles-back').del(),

    knex('muscles-back').insert(
      [
        {
        id: 69,
        name: 'deltoid'
        },
        {
        id: 70,
        name: 'deltoid'
        },
        {
        id: 71,
        name: 'triceps-brachii'
        },
        {
        id: 72,
        name: 'triceps-brachii'
        },
        {
        id: 73,
        name: 'brachioradialis'
        },
        {
        id: 74,
        name: 'brachioradialis'
        },
        {
        id: 75,
        name: 'anconeus'
        },
        {
        id: 76,
        name: 'anconeus'
        },
        {
        id: 77,
        name: 'extensor-digitorum'
        },
        {
        id: 78,
        name: 'extensor-digitorum'
        },
        {
        id: 79,
        name: 'extensor-carpi-ulnaris'
        },
        {
        id: 80,
        name: 'extensor-carpi-ulnaris'
        },
        {
        id: 81,
        name: 'extensor-retinaculum'
        },
        {
        id: 82,
        name: 'extensor-retinaculum'
        },
        {
        id: 83,
        name: 'peroneus-longus'
        },
        {
        id: 84,
        name: 'peroneus-longus'
        },
        {
        id: 85,
        name: 'achilles-tendon'
        },
        {
        id: 86,
        name: 'achilles-tendon'
        },
        {
        id: 87,
        name: 'gastronemius'
        },
        {
        id: 88,
        name: 'gastronemius'
        },
        {
        id: 89,
        name: 'plantaris'
        },
        {
        id: 90,
        name: 'plantaris'
        },
        {
        id: 91,
        name: 'semitendinosus'
        },
        {
        id: 92,
        name: 'semitendinosus'
        },
        {
        id: 93,
        name: 'semimembranosus'
        },
        {
        id: 94,
        name: 'semimembranosus'
        },
        {
        id: 95,
        name: 'adductor-longus'
        },
        {
        id: 96,
        name: 'adductor-longus'
        },
        {
        id: 97,
        name: 'biceps-femoris'
        },
        {
        id: 98,
        name: 'biceps-femoris'
        },
        {
        id: 99,
        name: 'vastus-lateralis'
        },
        {
        id: 100,
        name: 'vastus-lateralis'
        },
        {
        id: 101,
        name: 'gracilis'
        },
        {
        id: 102,
        name: 'gracilis'
        },
        {
        id: 103,
        name: 'iliotibal-band'
        },
        {
        id: 104,
        name: 'iliotibal-band'
        },
        {
        id: 105,
        name: 'gluteus-maximus'
        },
        {
        id: 106,
        name: 'gluteus-medius'
        },
        {
        id: 107,
        name: 'gluteus-medius'
        },
        {
        id: 108,
        name: 'external-oblique'
        },
        {
        id: 109,
        name: 'external-oblique'
        },
        {
        id: 110,
        name: 'latissimus-dorsi'
        },
        {
        id: 111,
        name: 'trapezius'
        },
        {
        id: 112,
        name: 'teres-major'
        },
        {
        id: 113,
        name: 'teres-major'
        },
        {
        id: 114,
        name: 'teres-minor'
        },
        {
        id: 115,
        name: 'teres-minor'
        }






      ])
  ])
};
