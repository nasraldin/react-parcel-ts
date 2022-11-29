export class Regex {
  public static readonly Arabic = /\b(?:ar|ar-)\b/gi;
  public static readonly Digit = /^\d+$/;
  public static readonly Number = /^[0-9]+$/;
  public static readonly FileName = /^[a-zA-Z0-9_.\s\u0600-\u06FF]+$/;
  public static readonly String = /^[A-Za-z]+$/;
  public static readonly Characters = /^[A-Za-z0-9]+$/;
  public static readonly _Characters = /^[A-Za-z0-9-_]+$/;
  public static readonly MACAddress = /^[a-zA-Z0-9.:-]+$/;
  public static readonly AnyText = /^[a-zA-Z0-9\-+,_.()\s\u0600-\u06FF]+$/;
  public static readonly StringAndNumbers = /^[A-Za-z0-9 &/.-]+$/;
}
