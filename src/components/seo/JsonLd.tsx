/**
 * Renders a JSON-LD <script>. `data` is serialised with `<` escaped so the
 * payload can never break out of the script element.
 */
export function JsonLd({ data }: { data: object }) {
  const safe = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}
