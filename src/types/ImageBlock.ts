export default interface ImageBlock {
  name: string; // The name of the fiel (omitting the extension)
  type: string; // The file type (for http headers)
  url: string; // the url to access the resource
}
