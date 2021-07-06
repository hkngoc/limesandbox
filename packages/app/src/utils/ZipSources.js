import JSZip from 'jszip';
import FileSaver from 'file-saver';

const ZipSources = async (files, name) => {
  const withoutLeadingSlash = (file) => {
    return file.replace(/^\//, '')
  };

  const zip = new JSZip();

  for (const file in files) {
    const d = files[file];
    if (typeof(d) === "string") {
      zip.file(withoutLeadingSlash(file), d);
    }
  }

  const content = await zip.generateAsync({ type: "blob" });
  FileSaver.saveAs(content, `${name}.zip`);
}

export {
  ZipSources
}

export default ZipSources;
