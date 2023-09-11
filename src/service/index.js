export const getPosts = async () => {
    return (await fetch('http://jsonplaceholder.typicode.com/posts')).json();
}