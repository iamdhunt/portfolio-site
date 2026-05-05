type TagPillsProps = {
  tags: string[];
  containerClassName?: string;
  tagClassName?: string;
};

export function TagPills({
  tags,
  containerClassName = "flex flex-wrap gap-1.5",
  tagClassName = "rounded-full border border-white/30 px-3 py-1 text-xs tracking-wide",
}: TagPillsProps) {
  return (
    <div className={containerClassName}>
      {tags.map((tag) => (
        <span key={tag} className={tagClassName}>
          {tag}
        </span>
      ))}
    </div>
  );
}
