import { PortableText } from "@portabletext/react";

export default function RichText({ value }) {
  if (!value || !value.length) return null;
  return (
    <div className="prose prose-invert max-w-none">
      <PortableText value={value} />
    </div>
  );
}
