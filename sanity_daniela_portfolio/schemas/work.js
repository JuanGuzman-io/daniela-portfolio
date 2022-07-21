export default {
    name: 'worksProjects',
    title: 'Works / Projects',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'title',
            title: 'Title Work/Project',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Type Work/Project',
            type: 'string'
        },
        {
            name: 'workProjectDesc',
            title: 'Desc Work/Project',
            type: 'text'
        },
        {
            name: 'more',
            title: 'View More URL',
            type: 'url'
        }
    ]
}