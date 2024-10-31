import prisma from "@/db";

export async function createPost(
    authorId: string,
    body: string,
) {

    try {
        await prisma.post.create({
            data: {
                authorId,
                body
            }
        })

    } catch (error) {
        console.log(`Error in createPost: ${error}`)
    }

}

export async function updatePostVotes(
    id: number,
    upvotes: number,
    downvotes: number
) {

    try {
        await prisma.post.update({
            where: {
                id
            },
            data: {
                upvotes,
                downvotes
            }
        })

    } catch (error) {
        console.log(`Error in updatePostVotes: ${error}`)
    }

}

export async function getPosts() {
    try {
        const posts = await prisma.post.findMany()

        return posts

    } catch (error) {
        console.log(`Error in getPosts: ${error}`)
    }
}

