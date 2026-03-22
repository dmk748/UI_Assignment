import * as fs from 'fs';

export function saveBookDetails(data: any) {
    fs.mkdirSync('output', { recursive: true });

    try {
        fs.writeFileSync(
            'output/book-details.json',
            JSON.stringify(data, null, 2)
        );
    } catch (error) {
        console.error('Error saving book details:', error);
        throw error;
    }
}