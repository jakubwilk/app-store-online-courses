export const imageFileFilter = (file) => {
    if (!file.match(/\.(jpg|jpeg|png)$/)) {
        return 'Only JPG, JPEG or PNG files are allowed!';
    }
};

export const editFileName = (file) => {
    const name = file.originalname;
    return Date.now() + '-' + name;
};