export const arbeidslogg = {
    name: 'arbeidslogg',
    title: 'Arbeidslogg',
    type: 'document',
    fields: [
        {
            name: 'dato',
            title: 'Dato',
            type: 'datetime'
        },
        {
            name: 'name',
            type: 'Navn',
            type: 'string'
        },
        {
            name: 'beskrivelse',
            title: 'Beskrivelse',
            type: 'text'
        },
        {
            name: 'arbeidstimer',
            title: 'Arbeidstimer',
            type: 'number'
        }
    ]

}