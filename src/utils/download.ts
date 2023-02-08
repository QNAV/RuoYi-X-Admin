import { saveAs } from 'file-saver';

export const download = (data: BlobPart, filename: string) =>
  new Promise((resolve, reject) => {
    const blob = new Blob([data]);

    if (blob instanceof Blob) {
      saveAs(blob, filename);
      resolve(true);
    } else {
      reject(new Error('下载失败'));
    }
  });
