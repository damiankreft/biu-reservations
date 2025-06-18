import { db, getUsers } from '@/data/DataSource';

// export async function GET(request: Request) {
//     const users = await getUsers();
//     return new Response(JSON.stringify(users), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//     });
// }

// export async function PUT(request: Request) {
//     const updatedUser = await request.json();
//     const data = await db();
//     const index = data.users.findIndex((user) => user.id === updatedUser.id);
//     if (index !== -1) {
//         data.users[index] = updatedUser;
//         return new Response(JSON.stringify(updatedUser), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } else {
//         return new Response('User not found', { status: 404 });
//     }
// }

export async function DELETE(request: Request) {
    console.log('DELETE request received');
    const { id } = await request.json();

    console.log('Parsed request body:', id);

    const data = await db();
    const index = data.users.findIndex((user) => user.id === id);
    if (index !== -1) {
        const deletedUser = data.users.splice(index, 1);
        return new Response(JSON.stringify(deletedUser), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response('User not found', { status: 404 });
}
