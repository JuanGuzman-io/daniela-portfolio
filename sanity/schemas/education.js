export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'school',
            title: 'School',
            type: 'string'
        },
        {
            name: 'degree',
            title: 'Degree',
            type: 'string'
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM'
            }
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM'
            }
        },
        {
            name: 'descDegree',
            title: 'Desc Degree',
            type: 'text'
        }
    ]
}