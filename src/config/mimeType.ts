/**
 * Collection of MimeType Constants for using to avoid Typos
 */
export class MimeType {
  public static readonly JSON = 'application/json';
  public static readonly PDF = 'application/pdf';
  public static readonly ZIP = 'application/zip';
  public static readonly ForceDownload = 'application/force-download';
  public static readonly Problem = 'application/problem+json';
  public static readonly Image_JPEG = 'image/jpeg';
  public static readonly Image_PNG = 'image/png';
  public static readonly Image_SVG = 'image/svg+xml';
  public static readonly Audio = 'audio/mpeg';
  public static readonly Video = 'video/mp4';
  public static readonly Multipart_Mixed = 'multipart/mixed';
  public static readonly Multipart_FormData = 'multipart/form-data';
  public static readonly Text = 'text/plain';
  public static readonly Text_UTF8 = 'text/plain; charset=utf-8';
  public static readonly Text_CSS = 'text/css';
  public static readonly Text_CSV = 'text/csv';
  public static readonly Text_HTML = 'text/html';
  /// <summary>
  /// Generic binary data, for unknown binary file.
  /// </summary>
  public static readonly OctetStream = 'application/octet-stream';
}
