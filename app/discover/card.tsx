type CardProps = {
  type: "free" | "paid";
  title: string;
  teacher: string;
  meta: string;
};

export default function Card({ type, title, teacher, meta }: CardProps) {
  return (
    <div className="card">
      <span className={`badge ${type}`}>{type.toUpperCase()}</span>
      <h3>{title}</h3>
      <p className="teacher">{teacher}</p>
      <p className="meta">{meta}</p>
    </div>
  );
}
