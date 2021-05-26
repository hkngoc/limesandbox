import JSZip from 'jszip';
import FileSaver from 'file-saver';

const ZipSources = async (files, name) => {
  const zip = new JSZip();

  for (const file in files) {
    const d = files[file];
    if (typeof(d) === "string") {
      zip.file(file, d);
    }
  }

  const content = await zip.generateAsync({ type: "blob" });
  FileSaver.saveAs(content, `${name}.zip`);
}

export {
  ZipSources
}

export default ZipSources;
