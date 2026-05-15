export default {
    name: 'data',
    title: 'Data',
    type: 'document',
    fields: [
        {
            name: 'heroTitle1',
            title: 'Hero Title 1',
            type: 'string'
        },
        {
            name: 'heroTitle2',
            title: 'Hero Title 2',
            type: 'string'
        },
        {
            name: 'cv',
            title: 'CV',
            type: 'file'
        },
        {
            name: 'image1',
            title: 'Image 1',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'image2',
            title: 'Image 2',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'aboutDesc1',
            title: 'About Me Desc 1',
            type: 'text'
        },
        {
            name: 'aboutDesc2',
            title: 'About Me Desc 2',
            type: 'text'
        },
        {
            name: 'educationDesc',
            title: 'Education Desc',
            type: 'text'
        },
        {
            name: 'worksDesc',
            title: 'Work/Project Desc',
            type: 'text'
        },
    ]
}