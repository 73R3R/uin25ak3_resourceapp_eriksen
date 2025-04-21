export const medlemmer = {
    name: 'medlemmer',
    title: 'Gruppemedlemmer',
    type: 'document',
    fields: [
        {
            name: 'medlemsnavn',
            title: 'Navn',
            type: 'string'
        },
        {
            name: 'bilde',
            type: 'image'
        },
        {
            name: 'email',
            title: 'Epostadresse',
            type: 'string'
        },
        {
            name: 'interesser',
            title: 'Interesser',
            type: 'array',
            of: [
                {
                    name: 'interessenavn',
                    title: 'Interesse Navn',
                    type: 'string',
            },
            ],
        },
        {
            name: 'biografi',
            title: 'Biografi',
            type: 'text'
        },
        {
            name: 'memberslug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'medlemsnavn',
                maxLength: 200,
                slugify: (input) => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
              }
        }
    ]

}