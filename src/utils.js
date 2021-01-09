// Import require download
import {PermissionsAndroid} from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
// Menampilkan modal saat tombol change diklik akan merubah state modal mejadi true
function showModal() {
    this.setState({
        modal: true,
    })
}
// Menghilangkan modal saat user klik diluar tombol modal
function hideModal() {
    this.setState({
        modal: false,
    })
}
// Menampilkan header yang memiliki input search
function search() {
    this.setState({
        search: true
    })
}
// menghilagkan header search dan menampilkan header awal
function headerPhotos() {
    this.setState({
        search: false,
    })
}
// update keyword Ketika user mencari dengan menggunakan keyword maka update state
function setKeyword(keyword) {
    this.setState({
        keyword: keyword
    })
}
// Mengambil gambar random dari API
function getImage() {
    return fetch('https://api.unsplash.com/photos/?client_id=_tkNSfuhfFridNmW_422txTpBggjii32OD6aERSRLnE&per_page=100')
        .then(res => res.json())
        .then(res => res)
}
// Mengambil gambar dengan keyword search
async function getImageSearch(keyword){
    let url = 'https://api.unsplash.com/search/photos?client_id=_tkNSfuhfFridNmW_422txTpBggjii32OD6aERSRLnE&per_page=30&query=' + keyword
    return await fetch(url)
        .then(res => res.json())
        .then(res => res.results)
}
// Memfilter ukuran gambar portrait
function filterPortrait(data) {
    let arrImage = []
    data.map(image => {
        if (image.width < image.height) {
            arrImage.push(image)
        }
    })
    return arrImage
}
// Memfilter ukuran gambar landscape
function filterLandscape(data) {
    let arrImage = []
    data.map(image => {
        if (image.width > image.height) {
            arrImage.push(image)
        }
    })
    return arrImage
}
// Memfilter ukuran gambar squere
function filterSquere(data) {
    let arrImage = []
    data.map(image => {
        if (image.width == image.height) {
            arrImage.push(image)
        }
    })
    return arrImage
}
// Memfilter ukuran radom
function filterRandom(data){
    let arrImage = [
        imageLeft  = [],
        imageRight = []
    ]
    data.map((image,index)=>{
        if(index%2 == 0){
            // Untuk konten kiri
            arrImage[0].push(image)
        }else{
            // Untuk konten kanan
            arrImage[1].push(image)
        }
    })
    return arrImage
}

// Cek permision file
async function checkPermission(url){
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission Required',
                message: 'This app needs access to your storage to download Photos',
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //Once user grant the permission start downloading
            return await downloadImage(url);
        } else {
            //If permission denied then show alert 'Storage Permission Not Granted'
            alert('Aktifkan perizinan file!');
        }
    } catch (err) {
        //To handle permission related issue
        console.warn(err);
    }
};
async function downloadImage(url){
    //Main function to download the image
    let date = new Date(); //To add the time suffix in filename   
    let ext = '.jpg'
    //Get config and fs from RNFetchBlob
    //config: To pass the downloading related options
    //fs: To get the directory path in which we want our image to download
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
        fileCache: true,
        addAndroidDownloads: {
            //Related to the Android only
            useDownloadManager: true,
            notification: true,
            path:
                PictureDir +
                '/image_' + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
            description: 'Image',
        },
    };
    await config(options)
            .fetch('GET', url)
            .then(res => {
                //Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                // alert('Image Downloaded Successfully.');
            })
    return true
}

export { showModal, hideModal, search, headerPhotos, setKeyword, getImage,getImageSearch, filterPortrait, filterLandscape, filterSquere, filterRandom, checkPermission}

