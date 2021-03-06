import { BibliographicMaterial } from '../BibliographicMaterial.js'

export class Book extends BibliographicMaterial{

    constructor(
        id: string,
        title: string,
        author: string,
        topic: string,
        sizeContent: string,
        typeContent: string,
        )
        {
            super(id, 'Book', title, author, topic, sizeContent, typeContent)

        }
        clone = () => {
            return new Book(
                this.id,
                this.title,
                this.author,
                this.topic,
                this.sizeContent,
                this.typeContent,
                )
        }
}