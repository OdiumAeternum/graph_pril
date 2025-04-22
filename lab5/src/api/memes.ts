export const getAllMemes = async () => {
    const response = await fetch("http://api.imgflip.com/get_memes");
    return await response.json();
}