import { ResponseFormat, PaginationMeta } from "../types.js";

/**
 * Format a date string to human-readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

/**
 * Format pagination info for markdown output
 */
export function formatPaginationMd(meta: PaginationMeta): string {
  const parts: string[] = [];

  if (meta.total !== undefined) {
    parts.push(`Showing ${meta.count} of ${meta.total} results`);
  } else {
    parts.push(`Showing ${meta.count} results`);
  }

  if (meta.has_more) {
    if (meta.next_cursor) {
      parts.push(`More available (cursor: \`${meta.next_cursor.slice(0, 20)}...\`)`);
    } else if (meta.next_offset !== undefined) {
      parts.push(`More available (next offset: ${meta.next_offset})`);
    }
  }

  return parts.join(" | ");
}

/**
 * Format labels as colored badges (markdown)
 */
export function formatLabels(labels: Array<{ name: string; color?: string }>): string {
  if (!labels.length) return "_No labels_";
  return labels.map(l => `\`${l.name}\``).join(" ");
}

/**
 * Format assignees list
 */
export function formatAssignees(assignees: Array<{ login: string }>): string {
  if (!assignees.length) return "_Unassigned_";
  return assignees.map(a => `@${a.login}`).join(", ");
}

/**
 * Create standard response with optional structured content
 */
export function createResponse<T>(
  format: ResponseFormat,
  data: T,
  markdownFormatter: (data: T) => string
): { text: string; structured: T } {
  const text = format === ResponseFormat.MARKDOWN
    ? markdownFormatter(data)
    : JSON.stringify(data, null, 2);

  return { text, structured: data };
}

/**
 * Notion: Extract plain text from rich text array
 */
export function extractPlainText(richText: Array<{ plain_text: string }> | undefined): string {
  if (!richText || !richText.length) return "";
  return richText.map(t => t.plain_text).join("");
}

/**
 * Notion: Format page title from properties
 */
export function extractNotionTitle(properties: Record<string, unknown>): string {
  // Try common title property names
  const titleProps = ["Name", "Title", "title", "name"];

  for (const prop of titleProps) {
    const value = properties[prop];
    if (value && typeof value === "object" && "title" in value) {
      const titleArray = (value as { title: Array<{ plain_text: string }> }).title;
      if (titleArray?.length) {
        return extractPlainText(titleArray);
      }
    }
  }

  // Fallback: find any title type property
  for (const [, value] of Object.entries(properties)) {
    if (value && typeof value === "object" && "title" in value) {
      const titleArray = (value as { title: Array<{ plain_text: string }> }).title;
      if (titleArray?.length) {
        return extractPlainText(titleArray);
      }
    }
  }

  return "Untitled";
}
