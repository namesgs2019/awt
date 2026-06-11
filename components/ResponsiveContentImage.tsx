import { assetPath } from "@/lib/assetPath";

export function ResponsiveContentImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="responsive-content-image">
      <img src={assetPath(src)} alt={alt} />
    </div>
  );
}
