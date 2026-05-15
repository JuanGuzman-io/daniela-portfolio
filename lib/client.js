import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
    projectId: 'g1yoduv1',
    dataset: 'production',
    apiVersion: '2024-05-15',
    useCdn: true,
    token: process.env.SANITY_TOKEN,
    perspective: 'published',
});

const builder = createImageUrlBuilder(client);
export const urlFor = source => builder.image(source);