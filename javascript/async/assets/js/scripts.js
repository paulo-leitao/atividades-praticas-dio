const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCatImg = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));
    return data.webpurl;
    
    //Outra forma, usando Try/Catch
/*     try{
        const result = await data.json();
        console.log(result);
        return result.webpurl;
    } catch(err) {
        console.log(err.message);
    } */
};

const setImgBtn = document.getElementById('change-cat');
const setImg = async() => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCatImg();
}

setImgBtn.addEventListener('click',setImg);
