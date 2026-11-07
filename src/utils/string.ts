export function stripHtmlTags(html: string): string {
  return html ? html.replace(/<[^>]+>/g, '') : '';
}