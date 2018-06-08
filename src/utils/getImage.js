export const getImage = url => {
    let urll = url.split('').slice(7).join('');
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if (url !== undefined) {
        return `https://images.weserv.nl/?url=${urll}`;
    }
};
 