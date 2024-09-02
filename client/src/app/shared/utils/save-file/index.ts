import FileSaver  from 'file-saver';

export async function downloadImage (_id:string |undefined, photo:any) {
    FileSaver.saveAs(photo, `download_${_id}.jpg`);
}
