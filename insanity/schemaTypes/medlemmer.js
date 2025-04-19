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
        }
    ]

}