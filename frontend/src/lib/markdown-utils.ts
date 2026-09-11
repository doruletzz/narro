/**
 * Minimal markdown parser for inline formatting.
 * Supports: **bold**, _italic_, __underline__
 *
 * Usage: parseMarkdown('**bold** _italic_ __underline__')
 * Returns HTML string ready for set:html
 */
export function parseMarkdown(text: string): string {
  if (!text) return '';

  let html = text;

  // Bold: **text** → <strong>text</strong>
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic: _text_ → <em>text</em>
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');

  // Underline: __text__ → <u>text</u>
  html = html.replace(/__(.+?)__/g, '<u>$1</u>');

  return html;
}
