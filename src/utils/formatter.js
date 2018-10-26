export function tagFromTitle(title) {
  return title.replace(/\s+/g, "-").toLowerCase();
}
